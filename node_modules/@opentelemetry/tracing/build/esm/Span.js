/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import * as api from '@opentelemetry/api';
import { isAttributeValue, hrTime, hrTimeDuration, isTimeInput, timeInputToHrTime, } from '@opentelemetry/core';
import { SemanticAttributes } from '@opentelemetry/semantic-conventions';
import { ExceptionEventName } from './enums';
/**
 * This class represents a span.
 */
var Span = /** @class */ (function () {
    /** Constructs a new Span instance. */
    function Span(parentTracer, context, spanName, spanContext, kind, parentSpanId, links, startTime) {
        if (links === void 0) { links = []; }
        if (startTime === void 0) { startTime = hrTime(); }
        this.attributes = {};
        this.links = [];
        this.events = [];
        this.status = {
            code: api.SpanStatusCode.UNSET,
        };
        this.endTime = [0, 0];
        this._ended = false;
        this._duration = [-1, -1];
        this.name = spanName;
        this._spanContext = spanContext;
        this.parentSpanId = parentSpanId;
        this.kind = kind;
        this.links = links;
        this.startTime = timeInputToHrTime(startTime);
        this.resource = parentTracer.resource;
        this.instrumentationLibrary = parentTracer.instrumentationLibrary;
        this._spanLimits = parentTracer.getSpanLimits();
        this._spanProcessor = parentTracer.getActiveSpanProcessor();
        this._spanProcessor.onStart(this, context);
    }
    Span.prototype.spanContext = function () {
        return this._spanContext;
    };
    Span.prototype.setAttribute = function (key, value) {
        if (value == null || this._isSpanEnded())
            return this;
        if (key.length === 0) {
            api.diag.warn("Invalid attribute key: " + key);
            return this;
        }
        if (!isAttributeValue(value)) {
            api.diag.warn("Invalid attribute value set for key: " + key);
            return this;
        }
        if (Object.keys(this.attributes).length >=
            this._spanLimits.attributeCountLimit &&
            !Object.prototype.hasOwnProperty.call(this.attributes, key)) {
            return this;
        }
        this.attributes[key] = value;
        return this;
    };
    Span.prototype.setAttributes = function (attributes) {
        for (var _i = 0, _a = Object.entries(attributes); _i < _a.length; _i++) {
            var _b = _a[_i], k = _b[0], v = _b[1];
            this.setAttribute(k, v);
        }
        return this;
    };
    /**
     *
     * @param name Span Name
     * @param [attributesOrStartTime] Span attributes or start time
     *     if type is {@type TimeInput} and 3rd param is undefined
     * @param [startTime] Specified start time for the event
     */
    Span.prototype.addEvent = function (name, attributesOrStartTime, startTime) {
        if (this._isSpanEnded())
            return this;
        if (this.events.length >= this._spanLimits.eventCountLimit) {
            api.diag.warn('Dropping extra events.');
            this.events.shift();
        }
        if (isTimeInput(attributesOrStartTime)) {
            if (typeof startTime === 'undefined') {
                startTime = attributesOrStartTime;
            }
            attributesOrStartTime = undefined;
        }
        if (typeof startTime === 'undefined') {
            startTime = hrTime();
        }
        this.events.push({
            name: name,
            attributes: attributesOrStartTime,
            time: timeInputToHrTime(startTime),
        });
        return this;
    };
    Span.prototype.setStatus = function (status) {
        if (this._isSpanEnded())
            return this;
        this.status = status;
        return this;
    };
    Span.prototype.updateName = function (name) {
        if (this._isSpanEnded())
            return this;
        this.name = name;
        return this;
    };
    Span.prototype.end = function (endTime) {
        if (endTime === void 0) { endTime = hrTime(); }
        if (this._isSpanEnded()) {
            api.diag.error('You can only call end() on a span once.');
            return;
        }
        this._ended = true;
        this.endTime = timeInputToHrTime(endTime);
        this._duration = hrTimeDuration(this.startTime, this.endTime);
        if (this._duration[0] < 0) {
            api.diag.warn('Inconsistent start and end time, startTime > endTime', this.startTime, this.endTime);
        }
        this._spanProcessor.onEnd(this);
    };
    Span.prototype.isRecording = function () {
        return this._ended === false;
    };
    Span.prototype.recordException = function (exception, time) {
        if (time === void 0) { time = hrTime(); }
        var attributes = {};
        if (typeof exception === 'string') {
            attributes[SemanticAttributes.EXCEPTION_MESSAGE] = exception;
        }
        else if (exception) {
            if (exception.code) {
                attributes[SemanticAttributes.EXCEPTION_TYPE] = exception.code.toString();
            }
            else if (exception.name) {
                attributes[SemanticAttributes.EXCEPTION_TYPE] = exception.name;
            }
            if (exception.message) {
                attributes[SemanticAttributes.EXCEPTION_MESSAGE] = exception.message;
            }
            if (exception.stack) {
                attributes[SemanticAttributes.EXCEPTION_STACKTRACE] = exception.stack;
            }
        }
        // these are minimum requirements from spec
        if (attributes[SemanticAttributes.EXCEPTION_TYPE] ||
            attributes[SemanticAttributes.EXCEPTION_MESSAGE]) {
            this.addEvent(ExceptionEventName, attributes, time);
        }
        else {
            api.diag.warn("Failed to record an exception " + exception);
        }
    };
    Object.defineProperty(Span.prototype, "duration", {
        get: function () {
            return this._duration;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Span.prototype, "ended", {
        get: function () {
            return this._ended;
        },
        enumerable: false,
        configurable: true
    });
    Span.prototype._isSpanEnded = function () {
        if (this._ended) {
            api.diag.warn('Can not execute the operation on ended Span {traceId: %s, spanId: %s}', this._spanContext.traceId, this._spanContext.spanId);
        }
        return this._ended;
    };
    return Span;
}());
export { Span };
//# sourceMappingURL=Span.js.map