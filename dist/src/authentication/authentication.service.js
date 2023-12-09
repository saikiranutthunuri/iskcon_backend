"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var AuthenticationService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticationService = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("../users/users.service");
const jwt_1 = require("@nestjs/jwt");
const dlt_service_1 = require("../dlt/dlt.service");
const user_details_service_1 = require("../user-details/user-details.service");
const user_security_logs_service_1 = require("../user-seculity-logs/user-security-logs.service");
const bcrypt = require("bcrypt");
const user_dids_service_1 = require("../user-dids/user-dids.service");
const nodes_service_1 = require("../nodes/nodes.service");
let AuthenticationService = AuthenticationService_1 = class AuthenticationService {
    constructor(usersService, jwtService, rubixService, usersDetailsService, userSecurityLogs, userDidsService, nodesService) {
        this.usersService = usersService;
        this.jwtService = jwtService;
        this.rubixService = rubixService;
        this.usersDetailsService = usersDetailsService;
        this.userSecurityLogs = userSecurityLogs;
        this.userDidsService = userDidsService;
        this.nodesService = nodesService;
        this.logger = new common_1.Logger(AuthenticationService_1.name);
    }
    signUp(username, password, email, phoneNumber) {
        return this.usersService.getUser(username).then(async (user) => {
            if (!user) {
                console.log('password', await this.hashPassword(password));
                return this.usersService
                    .signUp(username, phoneNumber, email, await this.hashPassword(password))
                    .then((result) => {
                    const id = result['id'];
                    this.rubixService.generateDid().then((result) => {
                        console.debug("rubbix", result);
                        this.nodesService.findNodeByPeerId(result["peerid"]).then(noderesult => {
                            console.debug("node", result);
                            this.userDidsService.addUserDid(id, result['did'], result['peerid'], noderesult["id"]);
                        });
                    });
                    this.usersDetailsService.createProfile(result['id']);
                    return result;
                });
            }
            throw new common_1.ConflictException('User already exists with a name');
        });
    }
    async hashPassword(password) {
        const saltRounds = 10;
        return bcrypt.hash(password, saltRounds);
    }
    async comparePasswords(plainTextPassword, hashedPassword) {
        return bcrypt.compare(plainTextPassword, hashedPassword);
    }
    async signIn(username, pass, browserInfo) {
        const user = await this.usersService.getUser(username);
        console.info(user);
        if (!(await this.comparePasswords(pass, user.passwordHash))) {
            throw new common_1.UnauthorizedException();
        }
        this.usersService.signIn(username);
        this.userSecurityLogs.log(user.id, browserInfo);
        const payload = {
            sub: user.userName,
            username: user.userName,
            userId: user.id,
            role: user.role
        };
        const data = await this.jwtService.signAsync(payload);
        return {
            access_token: data,
        };
    }
    async verifyAndDecodeToken(token) {
        try {
            const decodedToken = await this.jwtService.verifyAsync(token);
            this.logger.log(`Decoded Token: ${JSON.stringify(decodedToken)}`);
            return decodedToken;
        }
        catch (error) {
            this.logger.error(`Error verifying/decoding token: ${error.message}`);
            throw new common_1.UnauthorizedException();
        }
    }
    async updatePassword(username, oldPassword, newPassword) {
        this.usersService.getUser(username).then(async (result) => {
            if (!(await this.comparePasswords(oldPassword, result.passwordHash))) {
                throw Error('Old Password doesnot match');
            }
            return this.usersService.updatePassword(username, await this.hashPassword(newPassword));
        });
    }
};
exports.AuthenticationService = AuthenticationService;
exports.AuthenticationService = AuthenticationService = AuthenticationService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        jwt_1.JwtService,
        dlt_service_1.RubixService,
        user_details_service_1.UserDetailsService,
        user_security_logs_service_1.UserSecurityLogsService,
        user_dids_service_1.UserDidsService,
        nodes_service_1.NodesService])
], AuthenticationService);
//# sourceMappingURL=authentication.service.js.map