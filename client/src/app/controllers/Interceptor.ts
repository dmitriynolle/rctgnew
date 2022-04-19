import {
  Injectable, Input
} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpInterceptor,
  HttpErrorResponse,
  HttpResponse
} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from "rxjs/operators";
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ModalWindowComponent} from '../modal-window/modal-window.component';
import {Router} from "@angular/router";

@Injectable()
export class Interceptor implements HttpInterceptor {
  private message: string;
  private errok: string;

  constructor(private modalService: NgbModal,
              private router: Router) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<any> {
    const jwt = localStorage.getItem('auth_token');
    if (jwt) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${jwt}`
        }
      });
    }
    return next.handle(request).pipe(
      tap(
        (event) => {
          if (event instanceof HttpResponse) {
            console.log(event);
            // if (event.status == 200 && event.body.token) {
            //   this.message = 'Добро пожаловать!';
            //   this.errok = 'ok';
            //   this.open();
            // }
            // if (event.status == 202){
            //   if (event.body.message)this.message = event.body.message;
            //   else this.message = 'Изменения записанны';
            //   this.errok = 'ok';
            //   this.open();
            // }
          }
        },
        (err) => {
          if (err instanceof HttpErrorResponse) {
            console.log(err);
            if (err.status == 500 || err.status == 401) {
              this.message = err.error.message;
            }
            // if (err.status == 400) {
            //   this.message = err.error.message;
            // }
            this.errok = 'error';
            this.open()
          }
        }
      )
    )
  }

  open() {
    const modalRef = this.modalService.open(ModalWindowComponent);
    modalRef.componentInstance.name = this.message;
    this.message = '';
    modalRef.componentInstance.header = this.errok;
    this.errok = '';
  }
}
