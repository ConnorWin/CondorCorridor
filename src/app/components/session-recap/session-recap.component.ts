import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-session-recap',
  templateUrl: './session-recap.component.html',
  styleUrls: ['./session-recap.component.css']
})
export class SessionRecapComponent implements OnInit {

  ngOnInit(): void {
    this.apiService.getSessionRecaps().subscribe((result => this.sessionRecapArticles = result));
  }

  sessionRecapArticles: Article[] = [];

  constructor(private apiService: ApiService) {

  }

}
