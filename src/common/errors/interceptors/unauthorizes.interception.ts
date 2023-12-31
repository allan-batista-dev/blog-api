import { Injectable, NestInterceptor, ExecutionContext, CallHandler, UnauthorizedException } from '@nestjs/common';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { UnauthorizedError } from '../types/UnauthorizedError';

@Injectable()
export class UnauthorizedErrorInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        return next.handle().pipe(
            catchError(error => {
                if (error instanceof UnauthorizedError) {
                    throw new UnauthorizedException(error.message);
                } else {
                    throw error;
                }
            })
        )
    }
}