import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CentreGeoRoutingModule } from './centre-geo-routing.module';
import { NavGeoComponent } from './nav-geo/nav-geo.component';
import { GeointerfaceComponent } from './geointerface/geointerface.component';
import { ClarityModule } from '@clr/angular';
import { CdsModule } from '@cds/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../Materiel/MaterialModule';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { GeoregistreComponent } from './georegistre/georegistre.component';
import { GeologinComponent } from './geologin/geologin.component';
import { CentreGeoComponent } from './centre-geo.component';
import { RouterModule } from '@angular/router';
import { AdressTableComponent } from './adress-table/adress-table.component';
@NgModule({
  declarations: [
    NavGeoComponent,
    CentreGeoComponent,
     GeointerfaceComponent,
    GeoregistreComponent,
    GeologinComponent,
    AdressTableComponent
  ],
  imports: [
    CommonModule,
    CommonModule,
     CommonModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,
     BrowserAnimationsModule,
    CdsModule,
    ClarityModule,
    RouterModule,
     MatFormFieldModule,  
  ]
})
export class CentreGeoModule { }
