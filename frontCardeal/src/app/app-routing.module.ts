import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { CrudCorretorComponent } from './views/crud-corretor/crud-corretor.component';
import { LoginCorretorComponent } from './views/login-corretor/login-corretor.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { CadastroImovelComponent } from './views/cadastro-imovel/cadastro-imovel.component';
import { UpdateImovelComponent } from './views/update-imovel/update-imovel.component';
import { UpdateCorretorComponent } from './views/update-corretor/update-corretor.component';
import { CadastroProprietarioComponent } from './views/cadastro-proprietario/cadastro-proprietario.component';
import { UpdateProprietarioComponent } from './views/update-proprietario/update-proprietario.component';
import { MeusImoveisComponent } from './views/meus-imoveis/meus-imoveis.component';
import { ImovelComponent } from './views/imovel/imovel.component';
import { AuthGuard } from './guard/auth.guard';
import { BuscarImoveisComponent } from './views/buscar-imoveis/buscar-imoveis.component';
import { CadastroClienteComponent } from './views/cadastro-cliente/cadastro-cliente.component';

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
    //canActivate: [AuthGuard]
  },
  {
    path: 'cadastro-imovel',
    component: CadastroImovelComponent,
    //canActivate: [AuthGuard]
  },
  {
    path: 'meus-imoveis',
    component: MeusImoveisComponent,
    //canActivate: [AuthGuard]
  },
  {
    path: 'imovel/:id',
    component: ImovelComponent,
  },
  {
    path: 'update-imovel/:id',
    component: UpdateImovelComponent,
  },
  {
    path: 'update-corretor/:corretorId',
    component: UpdateCorretorComponent,
  },
  {
    path: 'cadastro-proprietario',
    component: CadastroProprietarioComponent,
  },
  {
    path: 'update-proprietario/:proprietarioId',
    component: UpdateProprietarioComponent,
  },
  {
    path: 'buscar-imovel',
    component: BuscarImoveisComponent,
  },
  {
    path: 'cadastro-cliente',
    component: CadastroClienteComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
