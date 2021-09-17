import { TracerConfig } from './types';
/**
 * Function to merge Default configuration (as specified in './config') with
 * user provided configurations.
 */
export declare function mergeConfig(userConfig: TracerConfig): {
    sampler: import("@opentelemetry/api").Sampler;
    forceFlushTimeoutMillis: number;
    spanLimits: {
        attributeCountLimit: number;
        linkCountLimit: number;
        eventCountLimit: number;
    };
} & Partial<TracerConfig> & TracerConfig;
//# sourceMappingURL=utility.d.ts.map