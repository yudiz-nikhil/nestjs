import { CreateTaskDto } from './create-task.dto';
export declare class TaskController {
    findAll(request: Request): string;
    findWild(): string;
    create(): string;
    createHttp(): string;
    findOne(id: string): string;
    createDTO(createCatDto: CreateTaskDto): Promise<string>;
}
