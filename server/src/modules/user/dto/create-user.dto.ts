import {
    IsEmail,
    IsNotEmpty,
    IsPhoneNumber,
    IsString,
    IsBoolean,
    MinLength,
  } from 'class-validator';
  
  export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    readonly fullName: string;
  
    @IsPhoneNumber(null)
    @IsNotEmpty()
    readonly phone: string;
  
    @IsEmail()
    @IsNotEmpty()
    readonly email: string;
  
    @IsBoolean()
    @IsNotEmpty()
    readonly isAdmin: boolean = false;
  
    @IsString()
    @MinLength(6, { message: 'Password must be at least 6 characters long' })
    @IsNotEmpty()
    readonly password: string;
  }
  