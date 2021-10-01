import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { CrudCorretorComponent } from './views/crud-corretor/crud-corretor.component';
import { LoginCorretorComponent } from './views/login-corretor/login-corretor.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { CadastroImovelComponent } from './views/cadastro-imovel/cadastro-imovel.component'
import { UpdateImovelComponent } from './views/update-imovel/update-imovel.component'
import { UpdateCorretorComponent } from './views/update-corretor/update-corretor.component'
import { CadastroProprietarioComponent } from './views/cadastro-proprietario/cadastro-proprietario.component'
import { UpdateProprietarioComponent } from './views/update-proprietario/update-proprietario.component';
import { MeusImoveisComponent } from './views/meus-imoveis/meus-imoveis.component';
import { ImovelComponent } from './views/imovel/imovel.component';
import { AuthGuard } from './guard/auth.guard';

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
    canActivate: [AuthGuard]
  },
  {
    path: 'cadastro-imovel',
    component: CadastroImovelComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'meus-imoveis',
    component: MeusImoveisComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'imovel',
    component: ImovelComponent,
    canActivate: [AuthGuard]

  },
  {
    path: 'update-imovel/:imovelId',
    component: UpdateImovelComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'update-corretor/:corretorId',
    component: UpdateCorretorComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'cadastro-proprietario',
    component: CadastroProprietarioComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'update-proprietario/:proprietarioId',
    component: UpdateProprietarioComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
