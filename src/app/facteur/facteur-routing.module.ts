import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 import { FacteurComponent } from './facteur.component';
import { FacteuraddactivityComponent } from './facteuraddactivity/facteuraddactivity.component';
import { FacteurhistoriqueComponent } from './facteurhistorique/facteurhistorique.component';
import { FacteurloginComponent } from './facteurlogin/facteurlogin.component';
import { FacteurprofileComponent } from './facteurprofile/facteurprofile.component';

const routes: Routes = [
  {path: 'facteurlogin', component:FacteurloginComponent},
 {path: 'facteurdash/:id' , canActivate:[ ] ,component: FacteurComponent ,
 children: [
   {path: 'historique' , component: FacteurhistoriqueComponent},
    {path: 'addactivity/:idtourne' , component: FacteuraddactivityComponent},

 ]
},
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FacteurRoutingModule { }
