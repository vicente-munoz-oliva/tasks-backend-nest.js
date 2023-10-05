import { PartialType } from '@nestjs/mapped-types';
import { CreateTaskDto } from './create-task.dto';
import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class UpdateTaskDto extends PartialType(CreateTaskDto) {
    @MaxLength(255)
    @IsString()
    @IsNotEmpty()
    name: string;
    @IsString()
    @IsNotEmpty()
    description: string;
    @IsNotEmpty()
    dueDate: Date;
}
