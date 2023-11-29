import { HealthIndicator, HealthIndicatorResult } from '@nestjs/terminus';
export declare class DatabaseHealthIndicator extends HealthIndicator {
    isHealthy(key: string): Promise<HealthIndicatorResult>;
}
