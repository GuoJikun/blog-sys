import { IsNumberString } from "class-validator";

export class Pager {
    @IsNumberString()
    page: number;
    @IsNumberString()
    size: number;
}
