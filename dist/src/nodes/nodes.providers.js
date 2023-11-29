"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nodesProviders = void 0;
const nodes_1 = require("../models/nodes");
exports.nodesProviders = [
    {
        provide: 'NODES_REPOSITORY',
        useValue: nodes_1.nodes,
    },
];
//# sourceMappingURL=nodes.providers.js.map