import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ResidentDetailComponent } from './components/resident-detail/resident-detail.component';
import { ResidentsComponent } from './components/residents/residents.component';
import { SettingsComponent } from './components/settings/settings.component';

const routes: Routes = [
  { path: '', redirectTo: '/dasboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'residents', component: ResidentsComponent },
  { path: 'detail/:id', component: ResidentDetailComponent },
  { path: 'settings', component: SettingsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
