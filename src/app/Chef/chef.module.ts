import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
 
import { ChefRoutingModule } from './chef-routing.module';
import { ChefloginComponent } from './cheflogin/cheflogin.component';
import { ChefsignupComponent } from './chefsignup/chefsignup.component';
import { ChefnavComponent } from './chefnav/chefnav.component';
import { ChefprofilComponent } from './chefprofil/chefprofil.component';
import { ChefaddfacteurComponent } from './chefaddfacteur/chefaddfacteur.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../Materiel/MaterialModule';
import { ClientRoutingModule } from '../Client/client-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CdsModule } from '@cds/angular';
import { ClarityModule } from '@clr/angular';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ChefComponent } from './chef.component';
import { AddfComponent } from './chefaddfacteur/addf/addf.component';
import { AddtComponent } from './cheftournee/addt/addt.component';
import { ChefadressesComponent } from './chefadresses/chefadresses.component';
import {PurchasesComponent  } from './purchases/purchases.component';
import { CheftourneeComponent } from './cheftournee/cheftournee.component';
import { AddaComponent } from './chefadresses/adda/adda.component';

@NgModule({
  declarations: [
    ChefloginComponent,
    ChefsignupComponent,
    ChefnavComponent,
    ChefprofilComponent,
    ChefaddfacteurComponent,
    ChefComponent,
    AddfComponent,
    PurchasesComponent,
    CheftourneeComponent,
    AddaComponent,
    ChefadressesComponent,
    AddtComponent,
  ],
  imports: [
    CommonModule,
    ChefRoutingModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,
    ClientRoutingModule,
    BrowserAnimationsModule,
    CdsModule,
    ClarityModule,
     MatFormFieldModule,  
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ],
})
export class ChefModule { }
