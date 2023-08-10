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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskController = void 0;
const common_1 = require("@nestjs/common");
const create_task_dto_1 = require("./create-task.dto");
let TaskController = class TaskController {
    findAll(request) {
        return 'This action returns all cats';
    }
    findWild() {
        return 'This route uses a wildcard';
    }
    create() {
        return 'This action adds a new cat';
    }
    createHttp() {
        return 'This action adds a new cat status';
    }
    findOne(id) {
        console.log(id);
        return `This action returns a #${id} cat`;
    }
    async createDTO(createCatDto) {
        console.log(createCatDto);
        return 'Created Successfully';
    }
};
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Request]),
    __metadata("design:returntype", String)
], TaskController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('ab*cd'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], TaskController.prototype, "findWild", null);
__decorate([
    (0, common_1.Post)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], TaskController.prototype, "create", null);
__decorate([
    (0, common_1.Post)('status'),
    (0, common_1.HttpCode)(204),
    (0, common_1.Header)('Cache-Control', 'none'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TaskController.prototype, "createHttp", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", String)
], TaskController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_task_dto_1.CreateTaskDto]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "createDTO", null);
TaskController = __decorate([
    (0, common_1.Controller)('task')
], TaskController);
exports.TaskController = TaskController;
//# sourceMappingURL=task.controller.js.map