import { Inject, Injectable, NotAcceptableException } from '@nestjs/common';
import { users } from 'src/models';
import { v4 as uuidv4 } from 'uuid';
@Injectable()
export class UsersService {
  validatePhoneNumber(id, phoneNumber, otp) {
    return this.usersRepository
      .findOne({
        where: {
          id,
        },
      })
      .then((result) => {
        if (result.phoneNumber != phoneNumber) {
          throw new NotAcceptableException('PhoneNumbers did not match');
        }
        return result;
      });
  }
  setPhoneNumber(id, phoneNumber) {
    return this.usersRepository.update({ phoneNumber }, { where: { id } });
  }
  constructor(
    @Inject('USERS_REPOSITORY') private readonly usersRepository: typeof users,
  ) {}
  updatePassword(username: any, newPassword: any) {
    return this.usersRepository
      .update(
        {
          passwordHash: newPassword,
        },
        {
          where: {
            userName: username,
          },
        },
      )
      .then((result) => {
        console.info(result);
        return result;
      });
  }
  getUser(username: string) {
    return this.usersRepository
      .findOne({
        where: {
          userName: username,
        },
      })
      .then((result) => {
        return result;
      });
  }

  signUp(userName, phoneNumber, email, password) {
    return this.usersRepository
      .create({
        id: uuidv4(),
        userName,
        phoneNumber,
        passwordHash: password,
        email,
        isActive: 1,
        shouldChangePasswordOnNextLogin: 0,
        creationTime: new Date(),
        role: "user"
      })
      .then((result) => {
        console.info(result);
        return result;
      })
      .catch((e) => {
        console.log(e);
      });
  }

  signIn(username: string) {
    return;
  }
}
