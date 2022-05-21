import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './Admin/admin.component';
import { LoginComponent } from './Admin/login/login.component';
import { GeologinComponent } from './centre-geo/geologin/geologin.component';
import { ChefloginComponent } from './Chef/cheflogin/cheflogin.component';
import { ClientLoginComponent } from './Client/client-login/client-login.component';
import { FacteurComponent } from './facteur/facteur.component'; 
import { FacteurloginComponent } from './facteur/facteurlogin/facteurlogin.component';
const routes: Routes = [
  {path:'',redirectTo:'client',pathMatch:'full'},
   {path:'admin' , component:  LoginComponent },
  {path:'client',component:ClientLoginComponent},
  {path:'chef',component:ChefloginComponent},
  {path:'facteur',component:FacteurloginComponent},
  {path:'centregeo',component:GeologinComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
