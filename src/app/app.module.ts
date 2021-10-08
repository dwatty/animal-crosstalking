import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResidentsComponent } from './components/residents/residents.component';
import { ResidentDetailComponent } from './components/resident-detail/resident-detail.component';
import { MessagesComponent } from './components/messages/messages.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ResidentSearchComponent } from './components/resident-search/resident-search.component';
import { ResidentTileComponent } from './components/resident-tile/resident-tile.component';
import { SettingsComponent } from './components/settings/settings.component';
import { ResidentAddComponent } from './components/resident-add/resident-add.component';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { ResidentEditComponent } from './components/resident-edit/resident-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    ResidentsComponent,
    ResidentDetailComponent,
    MessagesComponent,
    DashboardComponent,
    ResidentSearchComponent,
    ResidentTileComponent,
    SettingsComponent,
    ResidentAddComponent,
    ResidentEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatBottomSheetModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
