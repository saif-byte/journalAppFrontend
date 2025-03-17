import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpHandlerFn,
} from '@angular/common/http';
import { Observable } from 'rxjs';

export function AuthInterceptor(
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
): Observable<HttpEvent<unknown>> {
  const authToken = localStorage.getItem('userToken'); // Get the user token from local storage
  debugger;
  // Clone the request and add the Authorization header
  if (authToken) {
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${authToken}`,
      },
    });
  }

  return next(req);
}
