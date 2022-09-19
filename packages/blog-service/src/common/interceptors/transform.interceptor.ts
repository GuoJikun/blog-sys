import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from "@nestjs/common";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

interface Response<T> {
    data: T;
}

@Injectable()
export class TransformInterceptor<T> implements NestInterceptor<T, Response<T>> {
    intercept(context: ExecutionContext, next: CallHandler): Observable<Response<T>> {
        const urlObject = context.getArgs().find(c => {
            return c.url;
        });
        const url = urlObject.url;

        return next.handle().pipe(
            map(data => {
                if (url.startsWith("/page/")) {
                    return data;
                }
                return {
                    data: data,
                    code: 200,
                    message: "success",
                };
            })
        );
    }
}
