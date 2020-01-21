import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article } from '../models';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  public getNewsFeed(): Observable<Article[]> {
    return this.http.get<Article[]>(`api/news`)
  }

  public getLore(): Observable<Article[]> {
    return this.http.get<Article[]>(`api/lore`)
  }

  public getSessionRecaps(): Observable<Article[]> {
    return this.http.get<Article[]>(`api/session-recaps`)
  }

  public saveArticle(article: Article) {
    return this.http.post(`api/save-article`, article)
  }
}
