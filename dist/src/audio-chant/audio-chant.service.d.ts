/// <reference types="node" />
import { audioChants } from 'src/models';
export declare class AudioChantService {
    private readonly audioChantRepository;
    private logger;
    constructor(audioChantRepository: typeof audioChants);
    createAudioChant(userId: string, buffer: Buffer, link: string): Promise<void>;
    getAudioChant(): Promise<any>;
}
