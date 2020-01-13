import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoreComponent } from './lore/lore.component';
import { NewsComponent } from './news/news.component';
import { SessionRecapComponent } from './session-recap/session-recap.component';

const routes: Routes = [
  { path: 'lore', component: LoreComponent },
  { path: '', component: NewsComponent },
  { path: 'session-recap', component: SessionRecapComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }