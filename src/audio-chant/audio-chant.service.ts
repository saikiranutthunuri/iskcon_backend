import { Inject, Injectable, Logger } from '@nestjs/common';
import { audioChants } from 'src/models';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class AudioChantService {
  private logger: Logger = new Logger(AudioChantService.name);

  constructor(
    @Inject('AUDIOCHANTS_REPOSITORY')
    private readonly audioChantRepository: typeof audioChants,
  ) {}

  async createAudioChant(userId: string, buffer: Buffer, link: string): Promise<void> {
    try {
      if ((buffer && link) || (!buffer && !link)) {
        // Either provide a buffer (file) or a link, but not both or none
        throw new Error('Please provide either a file or a link, but not both or none.');
      }

      const audioChantData: any = {
        id: uuidv4(),
        creatorId: userId,
        creationTime: new Date(),
      };

      if (buffer) {
        // If buffer (file) is provided, store it directly
        audioChantData.audio = buffer;
      } else {
        // If link is provided, store the link
        audioChantData.link = link;
      }

      const result = await this.audioChantRepository.create(audioChantData);
      

      this.logger.debug('AudioChant created successfully', result);
    } catch (error) {
      this.logger.error(error.message);
      throw new Error('Failed to create AudioChant');
    }
  }

    async getAudioChant(): Promise<string | null> {
    try {
      const result = await this.audioChantRepository.findOne({
        attributes: ['link'],
        order: [['creationTime', 'DESC']],
      });

      if (result) {
        this.logger.debug('Latest Audio Link retrieved successfully', result.link);
        return result.link;
      } else {
        this.logger.debug('No AudioChant found.');
        return null;
      }
    } catch (error) {
      this.logger.error(error);
      throw new Error('Failed to retrieve latest Audio Link');
    }
  }
}
