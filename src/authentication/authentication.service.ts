import {
  ConflictException,
  Injectable,
  Logger,
  LoggerService,
  UnauthorizedException,
} from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { RubixService } from 'src/dlt/dlt.service';
import { users } from '../models/users';
import { UserDetailsService } from 'src/user-details/user-details.service';
import { UserSecurityLogsService } from 'src/user-seculity-logs/user-security-logs.service';
import * as bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';
import { UserDidsService } from 'src/user-dids/user-dids.service';
import { NodesService } from 'src/nodes/nodes.service';

@Injectable()
export class AuthenticationService {
  private logger: Logger = new Logger(AuthenticationService.name);
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    private rubixService: RubixService,
    private usersDetailsService: UserDetailsService,
    private userSecurityLogs: UserSecurityLogsService,
    private userDidsService: UserDidsService,
    private nodesService: NodesService
  ) {}

  signUp(
    username: string,
    password: string,
    email: string,
    phoneNumber: string,
  ) {
    return this.usersService.getUser(username).then(async (user) => {
      if (!user) {
        console.log('password', await this.hashPassword(password));
        return this.usersService
          .signUp(
            username,
            phoneNumber,
            email,
            await this.hashPassword(password),
          )
          .then((result) => {
            const id = result['id'];
            this.rubixService.generateDid().then((result) => {
              console.debug("rubbix", result)
              this.nodesService.findNodeByPeerId(result["peerid"]).then( noderesult => {
                console.debug("node", result)
                this.userDidsService.addUserDid(
                  id,
                  result['did'],
                  result['peerid'],
                  noderesult["id"]
                );
              });
              })
            this.usersDetailsService.createProfile(result['id']);
            return result;
          });
      }
      throw new ConflictException('User already exists with a name');
    });

    // this.rubixService.generateDid
  }

  async hashPassword(password: string): Promise<string> {
    const saltRounds = 10; // You can configure this according to your security needs
    return bcrypt.hash(password, saltRounds);
  }

  async comparePasswords(
    plainTextPassword: string,
    hashedPassword: string,
  ): Promise<boolean> {
    return bcrypt.compare(plainTextPassword, hashedPassword);
  }

  async signIn(
    username: string,
    pass: string,
    browserInfo: string,
  ): Promise<any> {
    const user = await this.usersService.getUser(username);
    console.info(user);
    if (!(await this.comparePasswords(pass, user.passwordHash))) {
      throw new UnauthorizedException();
    }

    // This service is to signIn
    this.usersService.signIn(username);
    this.userSecurityLogs.log(user.id, browserInfo);

    // generate auth token with the this payload
    const payload = {
      sub: user.userName,
      username: user.userName,
      userId: user.id,
      role: user.role
    };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  async updatePassword(username, oldPassword, newPassword) {
    this.usersService.getUser(username).then(async (result) => {
      if (!(await this.comparePasswords(oldPassword, result.passwordHash))) {
        throw Error('Old Password doesnot match');
      }
      return this.usersService.updatePassword(
        username,
        await this.hashPassword(newPassword),
      );
    });
  }
}
