import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacteurloginComponent } from './facteurlogin/facteurlogin.component';
import { FacteurNavComponent } from './facteur-nav/facteur-nav.component';
import { FacteurInterfaceComponent } from './facteur-interface/facteur-interface.component';
import { FacteurRoutingModule } from './facteur-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../Materiel/MaterialModule';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CdsModule } from '@cds/angular';
import { ClarityModule } from '@clr/angular';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FacteurComponent } from './facteur.component';
import { FacteurhistoriqueComponent } from './facteurhistorique/facteurhistorique.component';
import { FacteuraddactivityComponent } from './facteuraddactivity/facteuraddactivity.component';
@NgModule({
  declarations: [
    FacteurloginComponent,
     FacteurNavComponent,
    FacteurhistoriqueComponent,
    FacteurInterfaceComponent,
    FacteurComponent,
    FacteuraddactivityComponent
  ],
  imports: [
    CommonModule, 
     FormsModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,
    FacteurRoutingModule, 
    CommonModule,   
    BrowserAnimationsModule,
    CdsModule,
    ClarityModule,
    MatFormFieldModule, 

  ]
})
export class FacteurModule { }
