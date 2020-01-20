import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Article } from '../../models';

@Component({
  selector: 'app-lore',
  templateUrl: './lore.component.html',
  styleUrls: ['./lore.component.css']
})
export class LoreComponent implements OnInit {
  ngOnInit(): void {
    this.apiService.getLore().subscribe((result => this.loreArticles = result));
  }

  loreArticles: Article[] = [];

  constructor(private apiService: ApiService) {

  }

}
