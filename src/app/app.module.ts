import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CdsModule } from '@cds/angular';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminRoutingModule } from './Admin/admin-routing.module';
import { AdminModule } from './Admin/admin.module';
import { ClientModule } from './Client/client.module';
import { ClientRoutingModule } from './Client/client-routing.module';
import { ChefModule } from './Chef/chef.module';
import { ChefRoutingModule } from './Chef/chef-routing.module';
import { FacteurModule } from './facteur/facteur.module';
import { FacteurRoutingModule } from './facteur/facteur-routing.module';
import { CentreGeoComponent } from './centre-geo/centre-geo.component';
import { CentreGeoModule } from './centre-geo/centre-geo.module';
import { CentreGeoRoutingModule } from './centre-geo/centre-geo-routing.module';
 //import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
   ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CdsModule,
    ClarityModule,
  //  ToastrModule.forRoot(), // ToastrModule added,
    AppRoutingModule,
    AdminModule,
    ChefModule,
     FacteurModule,
     FacteurRoutingModule,
    ChefRoutingModule,
    ClientModule,
    ClientRoutingModule,
    AdminRoutingModule,
    CentreGeoModule,
    CentreGeoRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
