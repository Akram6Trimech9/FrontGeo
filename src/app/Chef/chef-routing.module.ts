import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChefComponent } from './chef.component';
import { ChefaddfacteurComponent } from './chefaddfacteur/chefaddfacteur.component';
import { ChefadressesComponent } from './chefadresses/chefadresses.component';
import { ChefloginComponent } from './cheflogin/cheflogin.component';
import { ChefprofilComponent } from './chefprofil/chefprofil.component';
import { ChefsignupComponent } from './chefsignup/chefsignup.component';
import { CheftourneeComponent } from './cheftournee/cheftournee.component';
import { PurchasesComponent } from './purchases/purchases.component';

const routes: Routes = [
  {path: 'cheflogin', component:ChefloginComponent},
 {path: 'signupchef', component: ChefsignupComponent},
 {path: 'chefdash' , canActivate:[ ] ,component: ChefComponent ,
 children: [
   {path: 'profil' , component: ChefprofilComponent},
    {path: 'facteur' , component: ChefaddfacteurComponent},
    {path: 'adresses' , component: ChefadressesComponent},
    {path: 'tournee' , component: CheftourneeComponent},
    {path: 'purchases' , component: PurchasesComponent}
 ]
},
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChefRoutingModule { }
