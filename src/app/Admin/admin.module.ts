import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { CdsModule } from '@cds/angular';
import { ClarityModule } from '@clr/angular';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { DashComponent } from './dash/dash.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import '@cds/core/icon/shapes/logout';
import '@cds/core/icon/shapes/filter';
import '@cds/core/icon/shapes/home';
import '@cds/core/icon/shapes/landscape';
import '@cds/core/icon/shapes/employee';

import { ClarityIcons, employeeIcon, userIcon } from '@cds/core/icon';
import { logoutIcon, logoutIconName } from '@cds/core/icon';
import { filterIcon, filterIconName } from '@cds/core/icon';
import { homeIcon, homeIconName  } from '@cds/core/icon';
import { landscapeIcon, landscapeIconName   } from '@cds/core/icon';
export { employeeIcon, employeeIconName } from '@cds/core/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import {   CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

//landscape
import { SignupComponent } from './signup/signup.component';
import { HttpClientModule } from '@angular/common/http';
import { ProfilComponent } from './profil/profil.component';
import { UtilisateursComponent } from './utilisateurs/utilisateurs.component';
import { RegionsComponent } from './regions/regions.component';
import { AdressesComponent } from './adresses/adresses.component';
import { EditComponent } from './regions/edit/edit.component';
import { AddComponent } from './regions/add/add.component';
import { MaterialModule } from '../Materiel/MaterialModule';
import { CentreDisComponent } from './centre-dis/centre-dis.component';
import { AddcentreComponent } from './centre-dis/addcentre/addcentre.component';
import { FacteurComponent } from './facteur/facteur.component';
import { TourneeComponent } from './tournee/tournee.component';
import { ActivityComponent } from './activity/activity.component';
ClarityIcons.addIcons(logoutIcon );
ClarityIcons.addIcons(userIcon);
ClarityIcons.addIcons(filterIcon);
ClarityIcons.addIcons(homeIcon);
ClarityIcons.addIcons(landscapeIcon);
ClarityIcons.addIcons(employeeIcon);

@NgModule({
  declarations: [
    AdminComponent,
    LoginComponent,
    AddcentreComponent,
    NavComponent,
    FooterComponent, 
    DashComponent, SignupComponent, ProfilComponent, UtilisateursComponent, RegionsComponent, AdressesComponent, EditComponent, AddComponent, CentreDisComponent, FacteurComponent, TourneeComponent, ActivityComponent, 
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,
    CommonModule,
    AdminRoutingModule,
    BrowserAnimationsModule,
    CdsModule,
    ClarityModule,
    MatFormFieldModule
  ],
  exports: [
    AdminComponent,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ],
})
export class AdminModule { }
