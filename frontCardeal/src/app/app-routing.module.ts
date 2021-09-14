import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { CrudCorretorComponent } from './views/crud-corretor/crud-corretor.component';


const routes: Routes = [
  {
    path: '', 
    component: HomeComponent
  },
  {
    path: 'cadastro-corretor', 
    component: CrudCorretorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
