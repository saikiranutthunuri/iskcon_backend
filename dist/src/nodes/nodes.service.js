"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var NodesService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodesService = void 0;
const common_1 = require("@nestjs/common");
let NodesService = NodesService_1 = class NodesService {
    constructor(nodesRepository) {
        this.nodesRepository = nodesRepository;
        this.logger = new common_1.Logger(NodesService_1.name);
    }
    findNodeByPeerId(peerId) {
        this.logger.debug("peerId", peerId);
        return this.nodesRepository.findOne({
            where: {
                peerId,
            },
        }).then(result => {
            console.debug(result);
            this.logger.debug("Found node", result);
            return result;
        }).catch(e => {
            console.error(e);
        });
    }
};
exports.NodesService = NodesService;
exports.NodesService = NodesService = NodesService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('NODES_REPOSITORY')),
    __metadata("design:paramtypes", [Object])
], NodesService);
//# sourceMappingURL=nodes.service.js.map