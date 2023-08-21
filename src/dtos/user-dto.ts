import { IsNotEmpty, IsString, IsUrl } from "class-validator";

export class CreateSignUpDto{

    @IsString()
    @IsNotEmpty()
    username:string;

    @IsString()
    @IsNotEmpty({message:"All fields are required!"})
    @IsUrl()
    avatar:string;
}