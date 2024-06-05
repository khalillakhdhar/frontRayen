import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConventionComponent } from './convention/convention.component';
import { DashboardComponent } from './dashboard.component';
import { DemandeComponent } from './demande/demande.component';
import { FactureComponent } from './facture/facture.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: '', component: DashboardComponent, children: [
    { path: 'profile', component: ProfileComponent },
    { path: 'factures', component: FactureComponent },
    { path: 'demandes', component: DemandeComponent },
    { path: 'conventions', component: ConventionComponent },
    { path: '', redirectTo: 'profile', pathMatch: 'full' } // Default route
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
