import { Injectable, Logger, Inject } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { liveStreams } from 'src/models'; // Adjust the import based on your models
import plivo from 'plivo'



@Injectable()
export class LiveStreamsService {
  private logger: Logger = new Logger(LiveStreamsService.name);
  private phoneNumberOTP = {};

  constructor(
    @Inject('LIVESTREAMS_REPOSITORY')
    private readonly liveStreamsRepository: typeof liveStreams,

  ) {}

  

  async createLiveStream(link: string): Promise<{ status: boolean; statusMessage: string; data: null }> {
  try {
    const liveStreamData: any = {
      id: uuidv4(),
      link: link,
      // creationTime: new Date(),
    };

    const result = await this.liveStreamsRepository.create(liveStreamData);

    this.logger.debug('LiveStream created successfully', result);

    // Return the specified response format
    return {
      status: true,
      statusMessage: 'Successfully Created',
      data: null,
    };
  } catch (error) {
    this.logger.error(error.message);

    // Handle the error appropriately (logging, returning an error response, etc.)
    throw new Error('Failed to create LiveStream');
  }
}

async getLiveStreams(): Promise<{ status: boolean; statusMessage: null; data: { streamLink: string } }> {
  try {
    const latestLiveStream = await this.liveStreamsRepository.findOne({
      attributes: ['link'],
      order: [['CreationTime', 'DESC']], // Order by creationTime in descending order
    });

    const latestLink = latestLiveStream ? latestLiveStream.link : null;

    return {
      status: true,
      statusMessage: null,
      data: {
        streamLink: latestLink,
      },
    };
  } catch (error) {
    // You can customize the error handling based on your requirements
    throw new Error('Failed to retrieve live stream link');
  }
}






  // Add any other methods you may need for updating, deleting, etc.
}
