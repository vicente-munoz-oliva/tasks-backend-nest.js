import { IsNotEmpty, IsString, MaxLength, Matches, IsAlpha, IsEmail } from 'class-validator';
import { passwordRegEx } from 'src/utils/regexPatterns';

export class CreateUserDto {
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

    @IsEmail()
    @IsNotEmpty()
    @MaxLength(255)
    email: string;

    @IsString()
    @IsNotEmpty()
    @Matches(passwordRegEx, {
        message: `Password must contain Minimum 8 and maximum 20 characters, at least one uppercase letter, one lowercase letter, one number, and one special character`,
    })
    password: string;
}
