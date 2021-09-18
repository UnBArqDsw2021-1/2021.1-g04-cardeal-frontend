import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { CrudCorretorComponent } from './views/crud-corretor/crud-corretor.component';
import { LoginCorretorComponent } from './views/login-corretor/login-corretor.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { CadastroImovelComponent } from './views/cadastro-imovel/cadastro-imovel.component';
import { MeusImoveisComponent } from './views/meus-imoveis/meus-imoveis.component';
import { ImovelComponent } from './views/imovel/imovel.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'cadastro-corretor',
    component: CrudCorretorComponent,
  },
  {
    path: 'login-corretor',
    component: LoginCorretorComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'cadastro-imovel',
    component: CadastroImovelComponent,
  },
  {
    path: 'meus-imoveis',
    component: MeusImoveisComponent,
  },
  {
    path: 'imovel',
    component: ImovelComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
