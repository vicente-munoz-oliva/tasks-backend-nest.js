import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateTaskDto {
    userId: number;
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
