import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './Admin/admin.component';
import { ChefloginComponent } from './Chef/cheflogin/cheflogin.component';
import { ClientLoginComponent } from './Client/client-login/client-login.component';
import { FacteurComponent } from './facteur/facteur.component'; 
import { FacteurloginComponent } from './facteur/facteurlogin/facteurlogin.component';
const routes: Routes = [
  {path:'',redirectTo:'client',pathMatch:'full'},
   {path:'admin' , component:  AdminComponent },
  {path:'client',component:ClientLoginComponent},
  {path:'chef',component:ChefloginComponent},
  {path:'facteur',component:FacteurloginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
