import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from './../seguranca/auth.guard';

import {EmpresaCadastroComponent} from './empresa-cadastro/empresa-cadastro.component';
import {EmpresaFormComponent} from './empresa-form/empresa-form.component';

const routes: Routes = [
    {
        path: '',
        component: EmpresaFormComponent
      },
      {
        path: 'nova',
        component: EmpresaCadastroComponent
      },	
      {
        path: ':id',
        component: EmpresaCadastroComponent,
        canActivate: [AuthGuard],
        data: { roles: ['ROLE_EMPRESA_PESQUISA']}
      }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class EmpresasRoutingModule { }