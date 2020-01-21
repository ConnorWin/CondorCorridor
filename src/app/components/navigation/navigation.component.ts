import { Component, AfterViewChecked } from '@angular/core';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements AfterViewChecked {
  private internalNavigations: NavigationLink[] = [
    {link: '', title: "Home"},
    {link: '/news', title: "News"},
    {link: '/lore', title: "Lore"},
    {link: '/session-recap', title: "Session Recap"}
  ]

  private adminLink = {link: '/admin', title: "Admin"};
  constructor(private auth: AuthService) { }

  ngAfterViewChecked() {
    if(this.auth.loggedIn && !this.internalNavigations.includes(this.adminLink)) {
      this.internalNavigations.push(this.adminLink);
    } else {
      this.internalNavigations.filter((item) => item.link !== '/admin');
    }
  }
}

interface NavigationLink {
  link:string;
  title: string;
}