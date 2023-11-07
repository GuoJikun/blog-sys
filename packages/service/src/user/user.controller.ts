import { Body, Controller, HttpCode, Post } from "@nestjs/common";
import { UserService } from "./user.service";

@Controller("user")
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post("/login")
    @HttpCode(200)
    async login(@Body() req: { account: string; password: string }) {
        console.log(req);
        if (req.account && req.password) {
            return this.userService.FindUserByAccountAndPassword(req.account, req.password);
        } else {
            return "缺少账号/密码字段";
        }
    }
}
