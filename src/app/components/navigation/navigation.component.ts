import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  private internalNavigations: NavigationLink[] = [
    {link: '', title: "Home"},
    {link: '/news', title: "News"},
    {link: '/lore', title: "Lore"},
    {link: '/session-recap', title: "Session Recap"}
  ]
  constructor(public auth: AuthService) { }

  ngOnInit() {
  }

}

interface NavigationLink {
  link:string;
  title: string;
}