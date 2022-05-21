import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdressTableComponent } from './adress-table/adress-table.component';
import { CentreGeoComponent } from './centre-geo.component';
import { GeointerfaceComponent } from './geointerface/geointerface.component';
import { GeologinComponent } from './geologin/geologin.component';
import { GeoregistreComponent } from './georegistre/georegistre.component';

const routes: Routes = [
  {path: 'centregelogin', component:GeologinComponent},
  {path: 'centregeoregistre', component:GeoregistreComponent},
 {path: 'geointerface' , canActivate:[ ] ,component:CentreGeoComponent ,
 children: [
   {path:'purchases',component:GeointerfaceComponent},
   {path:'adress',component:AdressTableComponent}
  
 ]
},
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CentreGeoRoutingModule { }
