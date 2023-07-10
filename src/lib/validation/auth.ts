import { IsEmail, IsNotEmpty, IsStrongPassword } from "class-validator";
import { Match } from "../decorators/match.decorator";

export class LoginSchema {
    @IsEmail()
    email: string;

    @IsStrongPassword()
    password: string;
}

export class SignupSchema {
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsStrongPassword()
    @IsNotEmpty()
    password: string;

    @IsStrongPassword()
    @IsNotEmpty()
    @Match(SignupSchema, (o) => o.password)
    confirmPassword: string;
}
