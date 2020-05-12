import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { AuthService } from './../auth.service';
import { ErrorHandlerService } from './../../core/error-handler.service';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {

  constructor(
       private auth: AuthService,
       private errorHandler: ErrorHandlerService,
       private router: Router
  ) {}

  login(usuario: string, senha: string) {
     this.auth.login(usuario, senha)
     .then(() => {
       this.router.navigate(['/empresas']);
     })
     .catch(erro => {
         this.errorHandler.handle(erro);
     });
  }
  
}