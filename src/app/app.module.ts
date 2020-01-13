import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { NewsComponent } from './news/news.component';
import { SessionRecapComponent } from './session-recap/session-recap.component';
import { LoreComponent } from './lore/lore.component';
import { AppRoutingModule } from './app-routing';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    NewsComponent,
    SessionRecapComponent,
    LoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
