import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { RubixService } from 'src/dlt/dlt.service';
import { users } from '../models/users';
import { UserDetailsService } from 'src/user-details/user-details.service';
import { UserSecurityLogsService } from 'src/user-seculity-logs/user-security-logs.service';
import { UserDidsService } from 'src/user-dids/user-dids.service';
import { NodesService } from 'src/nodes/nodes.service';
export declare class AuthenticationService {
    private usersService;
    private jwtService;
    private rubixService;
    private usersDetailsService;
    private userSecurityLogs;
    private userDidsService;
    private nodesService;
    private logger;
    constructor(usersService: UsersService, jwtService: JwtService, rubixService: RubixService, usersDetailsService: UserDetailsService, userSecurityLogs: UserSecurityLogsService, userDidsService: UserDidsService, nodesService: NodesService);
    signUp(username: string, password: string, email: string, phoneNumber: string): Promise<void | users>;
    hashPassword(password: string): Promise<string>;
    comparePasswords(plainTextPassword: string, hashedPassword: string): Promise<boolean>;
    signIn(username: string, pass: string, browserInfo: string): Promise<any>;
    updatePassword(username: any, oldPassword: any, newPassword: any): Promise<void>;
}
