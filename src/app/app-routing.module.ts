import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ResidentDetailComponent } from './components/resident-detail/resident-detail.component';
import { ResidentsComponent } from './components/residents/residents.component';
import { SettingsComponent } from './components/settings/settings.component';

const routes: Routes = [
  { path: '', redirectTo: '/dasboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent, data: {animation: 'DashboardPageAnimation'} },
  { path: 'residents', component: ResidentsComponent, data: {animation: 'ResidentsPageAnimation'} },
  { path: 'detail/:id', component: ResidentDetailComponent, data: {animation: 'DetailPageAnimation'} },
  { path: 'settings', component: SettingsComponent, data: {animation: 'SettingsPageAnimation'} }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
