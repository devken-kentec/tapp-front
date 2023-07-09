import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'painel', loadChildren: ()=> import('./modulos/painel/painel.module').then(p=>p.PainelModule) },
  { path: 'menu', loadChildren: ()=> import('./modulos/menu/menu.module').then(m=>m.MenuModule) },
  { path: 'login', loadChildren: ()=> import('./modulos/login/login.module').then(l=>l.LoginModule) },
  { path: 'listas', loadChildren: ()=> import('./modulos/listas/listas.module').then(l=> l.ListasModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
