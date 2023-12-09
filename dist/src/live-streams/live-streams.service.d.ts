import { liveStreams } from 'src/models';
export declare class LiveStreamsService {
    private readonly liveStreamsRepository;
    private logger;
    private phoneNumberOTP;
    constructor(liveStreamsRepository: typeof liveStreams);
    createLiveStream(link: string): Promise<{
        status: boolean;
        statusMessage: string;
        data: null;
    }>;
    getLiveStreams(): Promise<{
        status: boolean;
        statusMessage: null;
        data: {
            streamLink: string;
        };
    }>;
    private generateOTP;
}
