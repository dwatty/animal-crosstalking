import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResidentsComponent } from './components/residents/residents.component';
import { ResidentDetailComponent } from './components/resident-detail/resident-detail.component';
import { MessagesComponent } from './components/messages/messages.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ResidentSearchComponent } from './components/resident-search/resident-search.component';
import { ResidentTileComponent } from './components/resident-tile/resident-tile.component';
import { SettingsComponent } from './components/settings/settings.component';

@NgModule({
  declarations: [
    AppComponent,
    ResidentsComponent,
    ResidentDetailComponent,
    MessagesComponent,
    DashboardComponent,
    ResidentSearchComponent,
    ResidentTileComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
