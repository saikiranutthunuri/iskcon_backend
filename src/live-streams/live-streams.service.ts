import { Injectable, Logger, Inject } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { liveStreams } from 'src/models'; // Adjust the import based on your models
import plivo from 'plivo'

const authId = 'MAMDK5NJBMMDA2ODBLNT';
const authToken = 'YjBkMWQ0ODk5OTJiZWJhOGU0M2JlNDc4MTcwYTNi';
const sendPhoneNumber = '+13502003495';
const SMS_MESSAGE_TEMPLATE_FOR_OTP = (userName, token) =>
  `Dear ${userName}, Your OTP for completing this transaction is ${token}. Valid for 10 minutes. If you have not requested this OTP, please ignore this message.`;
const SMS_MESSAGE_TEMPLATE_FOR_CONSERT =
  'Hare Krishna!\r\n\r\nWe have built a new platform for Devotees, making the experience faster and more transparent. Please click the link to Register - https://iskconclient.azurewebsites.net/empty/registerConsentPage?consent_id={0}';

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


//  async sendOTP(dst: string): Promise<string> {
//     const client = new plivo.Client(authId, authToken);
//     const token = this.generateOTP();

//     try {
//       return await client.messages.create({
//         src: sendPhoneNumber,
//         dst: dst,
//         text: `Your OTP is: ${token}`,
        
    
//       });

//       this.logger.debug(`OTP sent to ${dst}`);
      
//     } catch (error) {
//       this.logger.error(`Error sending OTP to ${dst}: ${error.message}`);
//       throw error;
//     }
//   }

  private generateOTP(): string {
    return Math.floor(100000 + Math.random() * 900000).toString();
  }



  // Add any other methods you may need for updating, deleting, etc.
}
