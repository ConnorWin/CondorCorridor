import { Component, OnInit } from '@angular/core';
import { Article } from '../../models';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  ngOnInit(): void {
    this.apiService.getNewsFeed().subscribe((result => this.newsArticles = result));
  }

  newsArticles: Article[] = [];

  constructor(private apiService: ApiService) {

  }

}
