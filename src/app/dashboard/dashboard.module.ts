import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { FooterComponent } from '../footer/footer.component';
import { ConventionComponent } from './convention/convention.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { DemandeComponent } from './demande/demande.component';
import { FactureComponent } from './facture/facture.component';
import { HeaderComponent } from './header/header.component';
import { ProfileComponent } from './profile/profile.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';


@NgModule({
  declarations: [
    DashboardComponent,
    ProfileComponent,
    FactureComponent,
    DemandeComponent,
    ConventionComponent,
    SidemenuComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    FooterComponent  


  ]
})
export class DashboardModule { }
