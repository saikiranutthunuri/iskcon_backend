import { Inject, Injectable, Logger } from '@nestjs/common';
import { spotLightEvents } from 'src/models';
import { v4 as uuiv4 } from "uuid";
@Injectable()
export class SpotLightEventsService {
    private logger:Logger = new Logger(SpotLightEventsService.name)
    constructor(
        @Inject("SPOTLIGHTEVENTS_REPOSITORY") private spotLightEventsRepository: typeof spotLightEvents
    ){
        
    }

    createSpotLightEvent( userId, createSpotlightEventDTO) {
        return this.spotLightEventsRepository.create({
            id: uuiv4(),
            ...createSpotlightEventDTO,
            creatorId: userId,
            creationTime: new Date()
        })
    }

    updateSpotLightEvent( updateSpotLightEventDTO) {
        return this.spotLightEventsRepository.update({

        },
        {
            where: {
                id: updateSpotLightEventDTO.id
            }
        })
    }

}
