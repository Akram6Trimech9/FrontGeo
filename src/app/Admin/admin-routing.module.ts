import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAuthGuard } from '../Auth/admin-auth.guard';
import { ActivityComponent } from './activity/activity.component';
import { AdminComponent } from './admin.component';
import { CentreDisComponent } from './centre-dis/centre-dis.component';
import { DashComponent } from './dash/dash.component';
import { FacteurComponent } from './facteur/facteur.component';
import { LoginComponent } from './login/login.component';
import { ProfilComponent } from './profil/profil.component';
import { RegionsComponent } from './regions/regions.component';
import { SignupComponent } from './signup/signup.component';
import { TourneeComponent } from './tournee/tournee.component';
import { UtilisateursComponent } from './utilisateurs/utilisateurs.component';

const routes: Routes = [
  {path: '', redirectTo: 'adminlogin', pathMatch:'full'},
  {path: 'adminlogin', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'admin' , canActivate:[AdminAuthGuard] ,component: AdminComponent ,
  children: [
    {path: 'profil' , component: ProfilComponent},
    {path: 'utilisateurs' , component: UtilisateursComponent},
    {path: 'regions' , component: RegionsComponent},
    {path:'centre',component:CentreDisComponent},
    {path:'facteur',component:FacteurComponent},
    {path:'tournee',component:TourneeComponent},
    {path:'activity',component:ActivityComponent}
  ]
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
