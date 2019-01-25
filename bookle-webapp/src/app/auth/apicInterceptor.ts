import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';

@Injectable()
export class ApicInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    request = request.clone({
      setHeaders: {
        'X-IBM-Client-Id': environment.auth.clientId,
        'X-IBM-Client-Secret': environment.auth.clientSecret
      }
    });
    return next.handle(request);
  }
}