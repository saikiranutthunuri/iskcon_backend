import { nodes } from '../models/nodes';
export declare class NodesService {
    private nodesRepository;
    private logger;
    constructor(nodesRepository: typeof nodes);
    findNodeByPeerId(peerId: any): Promise<void | nodes>;
}
