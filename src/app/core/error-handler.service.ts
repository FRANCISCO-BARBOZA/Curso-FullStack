import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from "@angular/router";

//import { ModalDialogComponent } from "./../shared/modal-dialog/ModalDialogComponent";
import { NotAuthenticatedError } from './../seguranca/money-http';

@Injectable()
export class ErrorHandlerService {

  constructor(
      private router: Router
  ) { }
  
  handle(errorResponse: any) {
      let msg: string;
  
      if (typeof errorResponse === 'string') {
          msg = errorResponse;
          
      } else if (errorResponse instanceof NotAuthenticatedError) {
          msg = 'Sua sessão expirou!';
          this.router.navigate(['/login']);
      
      } else if (errorResponse instanceof HttpErrorResponse       
          && errorResponse.status >= 400 && errorResponse.status <=499) {
          msg = 'Ocorreu um erro ao processar a sua solicitação.';
          
          if (errorResponse.status === 403) {
              msg = 'Você não tem permissão para executar esta ação'; 
          }
          if (errorResponse.status === 401) {
            msg = 'Configuração definida incorretamente'; 
        }
        
          try {
              msg = errorResponse.error[0].mensagemUsuario;
          } catch (e) {}
          
         
      } else {
          msg = 'Erro ao processar serviço remoto. Tente novamente.';
          console.error('Ocorreu um erro', errorResponse);
      }
  
//      this.modal.dialog.open(ModalDialogComponent, {
//          width: '350px',
//          data: msg
//      });

  }
}