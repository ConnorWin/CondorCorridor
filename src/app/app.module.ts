import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule, MatInputModule, MatSelectModule, MatButtonModule, MatMenuModule, MatToolbarModule, MatIconModule, MatExpansionModule } from '@angular/material'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { NewsComponent } from './components/news/news.component';
import { SessionRecapComponent } from './components/session-recap/session-recap.component';
import { LoreComponent } from './components/lore/lore.component';
import { AppRoutingModule } from './app-routing';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminComponent } from './components/admin/admin.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    NewsComponent,
    SessionRecapComponent,
    LoreComponent,
    HomeComponent,
    AdminComponent,
    HeaderComponent
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
    MatSelectModule,
    MatCardModule,
    MatExpansionModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
