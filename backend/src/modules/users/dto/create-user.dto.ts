import { IsEmail, IsNotEmpty } from "class-validator";

export class CreateUserDto {
    @IsNotEmpty({message: "Tên không được để trống"})
    name: string;
    @IsNotEmpty({message: "Email không được để trống"})
    @IsEmail({}, {message: "Email không hợp lệ"})
    email: string;
    @IsNotEmpty({message: "ật khẩu không được để trống"})
    password: string;

    phone: string;
    address: string;
    image: string;
}
