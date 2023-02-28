import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastrarPfComponent,  } from './components';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    CadastrarPfComponent,
    CadastrarPfComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class CadastroPfModule { }
