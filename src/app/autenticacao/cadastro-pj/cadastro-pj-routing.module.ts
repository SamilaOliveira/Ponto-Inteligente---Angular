import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CadastroPJComponent, CadastrarPjComponent } from "./components";

export const CadastroPjRoutes: Routes = [
  {
    path: 'cadastro-pj',
    component: CadastroPJComponent,
    children: [
      {
        path: '',
        component: CadastrarPjComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(CadastroPjRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class CadastroPjRoutingModule {
}
