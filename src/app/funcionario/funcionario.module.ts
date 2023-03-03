import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LancamentoComponent ,ListagemComponent } from './components';
import { RouterModule } from '@angular/router';
import { FuncionarioComponent } from './components/funcionario.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpUtilService, LancamentoService } from '../shared';


@NgModule({
  declarations: [
    ListagemComponent,
    LancamentoComponent,
    FuncionarioComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatTooltipModule,
    MatIconModule,
    MatSnackBarModule,
    ReactiveFormsModule
  ],
  providers: [
    HttpUtilService,
    LancamentoService
  ]
})
export class FuncionarioModule { }
