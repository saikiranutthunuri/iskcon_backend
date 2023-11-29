import { Inject, Injectable } from '@nestjs/common';
import { nonFunctionalDays } from '../models/nonFunctionalDays';
import { v4 as uuidv4 } from 'uuid';
import { Op } from 'sequelize';
import moment from "moment";
@Injectable()
export class NonFunctionalDaysService {
  constructor(
    @Inject('NONFUNCTIONALDAYS_REPOSITORY')
    private readonly nonFunctionalDaysRepository: typeof nonFunctionalDays,
  ) {}

  createNonFunctionalDay(userID, occassionName, occassionDate) {
    return this.nonFunctionalDaysRepository.create({
      id: uuidv4(),
      occassionName,
      occassionDate,
      creatorId: userID,
      creationTime: new Date(),
    });
  }
  findAllFromToday() {
    return this.nonFunctionalDaysRepository.findAll({
      where: {
        occassionDate: {
          [Op.gt]: new Date(),
        },
      },
    });
  }

  delete(date) {
    console.log("date",date)
    return this.nonFunctionalDaysRepository.destroy({
      where: {
        occassionDate: {
          [Op.eq]: new Date(date)
      },
    }
    }).then( result => {
      console.log(result)
      return result
    }).catch( e=> {
      console.error(e)
    });
  }
}
