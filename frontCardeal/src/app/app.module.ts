import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { CrudCorretorComponent } from './views/crud-corretor/crud-corretor.component';
import { FormsModule } from '@angular/forms';
import { LoginCorretorComponent } from './views/login-corretor/login-corretor.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { CadastroImovelComponent } from './views/cadastro-imovel/cadastro-imovel.component';
import { MeusImoveisComponent } from './views/meus-imoveis/meus-imoveis.component';
import { ImovelComponent } from './views/imovel/imovel.component';
import { UpdateImovelComponent } from './views/update-imovel/update-imovel.component';
import { UpdateCorretorComponent } from './views/update-corretor/update-corretor.component';
import { CadastroProprietarioComponent } from './views/cadastro-proprietario/cadastro-proprietario.component';
import { UpdateProprietarioComponent } from './views/update-proprietario/update-proprietario.component';
import { httpInterceptorProviders } from './http-interceptors';
import { BuscarImoveisComponent } from './views/buscar-imoveis/buscar-imoveis.component';
import { PostagensComponent } from './views/postagens/postagens.component';
import { CadastroClienteComponent } from './views/cadastro-cliente/cadastro-cliente.component';
import { UpdateClienteComponent } from './views/update-cliente/update-cliente.component';
import { CadastroAgendamentoComponent } from './views/cadastro-agendamento/cadastro-agendamento.component';
import { UpdateAgendamentoComponent } from './views/update-agendamento/update-agendamento.component';
import { ToastrModule } from 'ngx-toastr';
import { FaqComponent } from './views/faq/faq.component';
import { ProprietariosComponent } from './views/proprietarios/proprietarios.component';
import { ClientesComponent } from './views/clientes/clientes.component';
import { AgendamentosComponent } from './views/agendamentos/agendamentos.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CrudCorretorComponent,
    LoginCorretorComponent,
    DashboardComponent,
    CadastroImovelComponent,
    MeusImoveisComponent,
    ImovelComponent,
    UpdateImovelComponent,
    UpdateCorretorComponent,
    CadastroProprietarioComponent,
    UpdateProprietarioComponent,
    BuscarImoveisComponent,
    PostagensComponent,
    CadastroClienteComponent,
    UpdateClienteComponent,
    CadastroAgendamentoComponent,
    UpdateAgendamentoComponent,
    FaqComponent,
    ProprietariosComponent,
    ClientesComponent,
    AgendamentosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      progressBar: true,
      progressAnimation: 'increasing',
      preventDuplicates: true,
    })
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
