import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
 import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { CdsModule } from '@cds/angular';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../Materiel/MaterialModule';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ClientLoginComponent } from './client-login/client-login.component';
import { ClientSignupComponent } from './client-signup/client-signup.component';
import { NavComponent } from './nav/nav.component';
import { ProfilComponent } from './profil/profil.component';
import { ClientComponent } from './client.component';
import { ClientRoutingModule } from './client-routing.module';
import {GoogleMapsModule} from '@angular/google-maps' ; 
import { IneterClientComponent } from './ineter-client/ineter-client.component';
@NgModule({
  declarations: [
  
    ClientLoginComponent,
       ClientSignupComponent,
       NavComponent,
       ProfilComponent,
       
       IneterClientComponent,
      ClientComponent,
  ],
  imports: [
    CommonModule,
    GoogleMapsModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,
    ClientRoutingModule,
    CommonModule,   
    BrowserAnimationsModule,
    CdsModule,
    ClarityModule,
    MatFormFieldModule,  
  ] ,  
 
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ],
})
export class ClientModule { } 
 