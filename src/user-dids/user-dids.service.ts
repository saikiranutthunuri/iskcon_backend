import { Inject, Injectable, Logger } from '@nestjs/common';
import { userDids } from '../models/userDids';
import { v4 as uuidv4 } from 'uuid';
@Injectable()
export class UserDidsService {
  private readonly logger: Logger = new Logger(UserDidsService.name);
  constructor(
    @Inject('USERDIDS_REPOSITORY') private userDidsRepository: typeof userDids,
  ) {}

  addUserDid(userId, did, peerId, nodeId) {
    return this.userDidsRepository
      .create({
        id: uuidv4(),
        did,
        peerId,
        creationTime: new Date(),
        creatorId: userId,
        userId: userId,
        nodeId
      })
      .then((result) => {
        return result;
      })
      .catch((e) => {
        this.logger.error(e);
      });
  }
}
