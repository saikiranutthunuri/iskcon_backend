import { Inject, Injectable, Logger } from '@nestjs/common';
import { tickerTexts } from 'src/models/tickerTexts';
import {v4 as uuidv4} from "uuid"

@Injectable()
export class TickerTextService {
    private logger:Logger = new Logger(TickerTextService.name)
constructor(
    @Inject("TICKERTEXTS_REPOSITORY") private readonly tickerTextRepository:typeof tickerTexts
){}

createTickerText(userId, line) {
    this.logger.debug(userId, line)
  return  this.tickerTextRepository.create({
    id: uuidv4(),
        creatorId: userId,
        creationTime: new Date(),
        quotation: line
    }).catch( e => {
        this.logger.error(e)
    })
    
}
    getTickerText() {
        return this.tickerTextRepository.findOne({
            order:[["creationTime","DESC"]]
        }).then( result => {
            this.logger.debug("tickerText", result)
            return result
        }).catch( e => {
            this.logger.error(e)
        })
    }
}
