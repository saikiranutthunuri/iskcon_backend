import { users } from 'src/models';
export declare class UsersService {
    private readonly usersRepository;
    validatePhoneNumber(id: any, phoneNumber: any, otp: any): Promise<users>;
    setPhoneNumber(id: any, phoneNumber: any): Promise<[affectedCount: number]>;
    constructor(usersRepository: typeof users);
    updatePassword(username: any, newPassword: any): Promise<[affectedCount: number]>;
    getUser(username: string): Promise<users>;
    signUp(userName: any, phoneNumber: any, email: any, password: any): Promise<void | users>;
    signIn(username: string): void;
}
