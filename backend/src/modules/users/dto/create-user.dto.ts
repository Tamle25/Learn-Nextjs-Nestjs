import { IsNotEmpty } from "class-validator";

export class CreateUserDto {
    @IsNotEmpty({message: "Ten khong duoc de trong"})
    name: string;
    email: string;
    password: string;
    phone: string;
    address: string;
    image: string;
}
