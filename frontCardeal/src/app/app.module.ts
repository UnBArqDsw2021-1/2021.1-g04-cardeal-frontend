import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { CrudCorretorComponent } from './views/crud-corretor/crud-corretor.component';
import { FormsModule } from '@angular/forms';
import { LoginCorretorComponent } from './views/login-corretor/login-corretor.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { CadastroImovelComponent } from './views/cadastro-imovel/cadastro-imovel.component';
import { UpdateImovelComponent } from './views/update-imovel/update-imovel.component';
import { UpdateCorretorComponent } from './views/update-corretor/update-corretor.component';
import { CadastroProprietarioComponent } from './views/cadastro-proprietario/cadastro-proprietario.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CrudCorretorComponent,
    LoginCorretorComponent,
    DashboardComponent,
    CadastroImovelComponent,
    UpdateImovelComponent,
    UpdateCorretorComponent,
    CadastroProprietarioComponent
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
