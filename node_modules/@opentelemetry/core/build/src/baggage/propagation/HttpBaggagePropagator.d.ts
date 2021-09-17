import { Context, TextMapGetter, TextMapPropagator, TextMapSetter } from '@opentelemetry/api';
/**
 * Propagates {@link Baggage} through Context format propagation.
 *
 * Based on the Baggage specification:
 * https://w3c.github.io/baggage/
 */
export declare class HttpBaggagePropagator implements TextMapPropagator {
    inject(context: Context, carrier: unknown, setter: TextMapSetter): void;
    extract(context: Context, carrier: unknown, getter: TextMapGetter): Context;
    fields(): string[];
}
//# sourceMappingURL=HttpBaggagePropagator.d.ts.map