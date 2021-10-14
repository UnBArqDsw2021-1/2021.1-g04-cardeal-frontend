import { Injectable } from "@angular/core";
import { CorretorService } from "../services/corretor.service";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpErrorResponse } from "@angular/common/http";
import { throwError } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable()
export class AuthInterceptor implements HttpInterceptor{
  constructor(private service: CorretorService){}

  intercept(req: HttpRequest<any>, next: HttpHandler){
    const accessToken = this.service.getAuthorizationToken();
    let request: HttpRequest<any> = req;

    if(accessToken && !this.service.tokenExpirado(accessToken)){
      request = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${accessToken}`)
      });
      console.log(request.headers);
    }

    return next.handle(request).pipe(
      catchError(this.handleError)
    )
  }

  private handleError(error: HttpErrorResponse){
    if(error.error instanceof ErrorEvent){
      console.error('Ocorreu um erro: ', error.error.message);
    }
    else {
      console.error(
        `Erro:${error.error}`
      );
    }
    return throwError('Ocorreu um erro, tente novamente');
  }
}
