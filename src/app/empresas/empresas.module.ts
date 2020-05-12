import { EmpresasRoutingModule } from './empresas-routing.module';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EmpresaCadastroComponent } from './empresa-cadastro/empresa-cadastro.component';
import { EmpresaFormComponent } from './empresa-form/empresa-form.component';



@NgModule({
  declarations: [
    EmpresaCadastroComponent, 
    EmpresaFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,

    EmpresasRoutingModule
  ]
})
export class EmpresasModule { }
