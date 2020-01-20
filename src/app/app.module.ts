import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule, MatButtonModule, MatMenuModule, MatToolbarModule, MatIconModule, MatExpansionModule } from '@angular/material'

import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { NewsComponent } from './components/news/news.component';
import { SessionRecapComponent } from './components/session-recap/session-recap.component';
import { LoreComponent } from './components/lore/lore.component';
import { AppRoutingModule } from './app-routing';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    NewsComponent,
    SessionRecapComponent,
    LoreComponent,
    HomeComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
