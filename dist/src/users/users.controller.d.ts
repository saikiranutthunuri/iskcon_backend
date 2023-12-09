import { AudioChantService } from 'src/audio-chant/audio-chant.service';
import { UserDetailsService } from 'src/user-details/user-details.service';
import { UsersService } from './users.service';
import { TickerTextService } from 'src/ticker-texts/ticker-texts.service';
import { LiveStreamsService } from 'src/live-streams/live-streams.service';
declare class UpdateProfileDTO {
    birthDay: Date;
    isVolunter: number;
    city: string;
    address?: string;
    state?: string;
    country?: string;
    pincode?: string;
    gender?: number;
}
declare class ValidatePhoneNumberDTO {
    phoneNumber: string;
    otp: string;
}
declare class UpdateVolunteerDTO {
    isSet: boolean;
}
export declare class UsersController {
    private readonly userService;
    private readonly userDetailsService;
    private readonly tickerTextService;
    private readonly audioChantService;
    private readonly liveStreamsService;
    private readonly logger;
    constructor(userService: UsersService, userDetailsService: UserDetailsService, tickerTextService: TickerTextService, audioChantService: AudioChantService, liveStreamsService: LiveStreamsService);
    getProfileMethod(request: Request): Promise<void | import("../models").userDetails>;
    GetTickerTextMethod(): Promise<void | import("../models").tickerTexts>;
    updateProfileMethod(request: Request, updateProfileDTO: UpdateProfileDTO): Promise<[affectedCount: number]>;
    updateVoluteerFlag(request: Request, updateVolunteerDTO: UpdateVolunteerDTO): Promise<[affectedCount: number]>;
    setProfilePictureMethod(): void;
    PostValidatePhoneNumber(request: Request, validatePhoneNumberDTO: ValidatePhoneNumberDTO): Promise<import("../models").users>;
    getReportsMethod(): void;
    GetAudioChant(): Promise<any>;
    getLiveStreams(): Promise<{
        status: boolean;
        statusMessage: null;
        data: {
            streamLink: string;
        };
    }>;
    GetTickerText(): void;
    GetAllEngagements(): void;
}
export {};
