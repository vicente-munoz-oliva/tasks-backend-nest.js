import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsNotEmpty, IsString, MaxLength, IsAlpha } from 'class-validator';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    userId?: number;
    @IsString()
    @IsNotEmpty()
    @MaxLength(55)
    @IsAlpha('es-ES')
    firstName: string;
    @IsString()
    @IsNotEmpty()
    @MaxLength(55)
    @IsAlpha('es-ES')
    lastName: string;

}
