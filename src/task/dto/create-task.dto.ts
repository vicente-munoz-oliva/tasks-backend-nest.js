import { IsNotEmpty, IsString, MaxLength, IsEnum } from 'class-validator';


export enum Status {
    pending = 'pending',
    inProgress = 'in progress',
    completed = 'completed',
    cancelled = 'cancelled',
}

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
    @IsEnum(Status)
    status: Status;
}
