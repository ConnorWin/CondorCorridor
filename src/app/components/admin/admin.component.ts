import { Component, OnInit } from '@angular/core';
import { ArticleTypes, Article } from '../../models';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  private articleForm: FormGroup;
  private articleTypesList = Object.values(ArticleTypes)
    .filter(value => isNaN(Number(value)) === false)
    .map(key => ArticleTypes[key]);;

  constructor(private formBuilder: FormBuilder, private apiService: ApiService) {
    this.articleForm = this.formBuilder.group({
      title: null,
      content: null,
      type: null
    });
  }

  onSubmit(article: Article) {
    if(article.content !== null &&
      article.title !== null &&
      Object.values(ArticleTypes).includes(article.type)) {
        this.apiService.saveArticle(article);
      } else {
        alert("Article isn't complete.");
      }
  }
}
