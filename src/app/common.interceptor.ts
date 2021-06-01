import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';



@Injectable()
export class CommonInterceptor implements HttpInterceptor {

  constructor() {}

  handleError(error:HttpErrorResponse){
    console.log('error occured');
    return throwError(error);
  }


  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const header1=new HttpHeaders({'API_Key':'jahfjkha'});
    const head=new Headers();
    return next.handle(request.clone({headers:header1})).pipe(
      catchError(this.handleError)
    );
  }
}
