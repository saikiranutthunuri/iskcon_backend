import { Inject, Injectable, Logger } from '@nestjs/common';
import { nodes } from '../models/nodes';

@Injectable()
export class NodesService {
    private logger:Logger = new Logger(NodesService.name)
  constructor(
    @Inject('NODES_REPOSITORY') private nodesRepository: typeof nodes,
  ) {}

  findNodeByPeerId(peerId) {
    this.logger.debug("peerId", peerId)
    return this.nodesRepository.findOne({
      where: {
        peerId,
      },
    }).then( result => {
      console.debug(result)
        this.logger.debug("Found node", result)
        return result
    }).catch( e=> {
      console.error(e)
    });
  }
}
