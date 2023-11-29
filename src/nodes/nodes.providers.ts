import { nodes } from '../models/nodes';

export const nodesProviders = [
  {
    provide: 'NODES_REPOSITORY',
    useValue: nodes,
  },
];
