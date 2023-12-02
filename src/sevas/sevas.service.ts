import { Inject, Injectable, Logger } from '@nestjs/common';
import { Op } from 'sequelize';
import { sevas } from 'src/models';
import { v4 as uuidv4 } from 'uuid';
import { CreateSevasDTO } from 'src/admin/admin.controller';
import { UpdateSevaDTO } from 'src/admin/admin.controller';
import { sevasAttributes } from 'src/models';

@Injectable()
export class SevasService {
    private logger: Logger= new Logger(SevasService.name)

    constructor(
        @Inject("SEVAS_REPOSITORY") 
        private sevasRepository: typeof sevas,

    ){

    }

    findSevas(){
        return this.sevasRepository.findAll()
    }

    findSevaBySevaId( sevaId){
        return this.sevasRepository.findOne( {
            where: {
                    id: {
    [Op.eq]: sevaId 
                    }
                }
        }).catch( e=> {
            this.logger.error(e)
        })
    }

     deleteSeva(sevaId){
       return this.sevasRepository.destroy( {
            where: {
                id: sevaId
            }
        }).catch( e=> {
            this.logger.error(e)
        })
     }
    

    async createSeva(createSevaDTO: CreateSevasDTO) {
    const sevaId = uuidv4();

    const newSeva = new this.sevasRepository({
      id: sevaId,
      name: createSevaDTO.name,
      type: createSevaDTO.type,
      description: createSevaDTO.description,
      minAmount: createSevaDTO.minAmount,
      startDate: createSevaDTO.startDate,
      endDate: createSevaDTO.endDate,
      sevaImage: createSevaDTO.sevaImage
  
    });

    await newSeva.save();

    return newSeva;
  }

    async updateSeva(sevaId: string, updateData: Partial<sevasAttributes>) {
    const seva = await this.sevasRepository.findOne({
      where: {
        id: sevaId,
      },
    });

    if (!seva) {
      throw new Error('Seva not found');
    }

    // Only update the fields that are present in the updateData
    await seva.update(updateData);

    return seva;
  }

}
