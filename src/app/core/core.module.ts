import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { RouterModule } from '@angular/router';
import localePt from '@angular/common/locales/pt';
import { Title } from '@angular/platform-browser';

import { MenuComponent } from './menu/menu.component';

registerLocaleData(localePt);

@NgModule({
  declarations: [MenuComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    MenuComponent
  ],
  providers: [
    Title,

    { provide: LOCALE_ID, useValue: 'pt-BR' }
  ]
})
export class CoreModule { }
