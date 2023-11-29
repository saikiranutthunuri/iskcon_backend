import { spotLightEvents } from 'src/models';
export declare class SpotLightEventsService {
    private spotLightEventsRepository;
    private logger;
    constructor(spotLightEventsRepository: typeof spotLightEvents);
    createSpotLightEvent(userId: any, createSpotlightEventDTO: any): Promise<spotLightEvents>;
    updateSpotLightEvent(updateSpotLightEventDTO: any): Promise<[affectedCount: number]>;
}
