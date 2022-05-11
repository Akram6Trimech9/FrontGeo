import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientLoginComponent } from './client-login/client-login.component';
import { ClientSignupComponent } from './client-signup/client-signup.component';
import { ClientComponent } from './client.component';
import { IneterClientComponent } from './ineter-client/ineter-client.component';
import { ProfilComponent } from './profil/profil.component';

const routes: Routes = [
   {path: 'clientlog', component:ClientLoginComponent},
  {path: 'signupclient', component: ClientSignupComponent},
  {path: 'dash/:id' , canActivate:[ ] ,component: ClientComponent ,
  children: [
    {path: 'profil' , component: ProfilComponent},
    {path: 'interface' , component: IneterClientComponent},

  ]
},
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
