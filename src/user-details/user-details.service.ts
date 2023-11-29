import { Inject, Injectable, Logger } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { userDetails } from 'src/models';

@Injectable()
export class UserDetailsService {
  setVolunteer(userId, value: boolean) {
    this.logger.log('user id', userId, value);
    return this.userDetailsRepository.update(
      { isVolunter: Number(value) },
      {
        where: {
          userId,
        },
      },
    );
  }
  setPhoneNumber() {
    throw new Error('Method not implemented.');
  }
  createProfile(userId) {
    return this.userDetailsRepository
      .create({
        id: uuidv4(),
        userId,
        gender: undefined,
        isVolunter: 0,
      })
      .catch((err) => {
        this.logger.error(err);
      });
  }
  private readonly logger = new Logger(UserDetailsService.name);
  constructor(
    @Inject('USERDETAILS_REPOSITORY')
    private userDetailsRepository: typeof userDetails,
  ) {}
  updateUserProfile(userId, updateProfileDTO) {
    this.logger.debug('userId', userId);
    return this.userDetailsRepository
      .update(
        {
          ...updateProfileDTO,
        },
        { where: { userId } },
      )
      .then((result) => {
        this.logger.debug(...result);
        return result;
      });
  }

  getUserProfile(userId) {
    console.info('userId', userId);
    return this.userDetailsRepository
      .findOne({
        where: {
          userId: userId,
        },
      })
      .then((result) => {
        console.info(result);
        return result;
      })
      .catch((error) => {
        console.error(error);
      });
  }
}
