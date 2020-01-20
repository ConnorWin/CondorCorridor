import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoreComponent } from './components/lore/lore.component';
import { NewsComponent } from './components/news/news.component';
import { SessionRecapComponent } from './components/session-recap/session-recap.component';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './components/home/home.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'lore', component: LoreComponent },
  { path: 'session-recap', component: SessionRecapComponent },
  { path: 'news', component: NewsComponent },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }