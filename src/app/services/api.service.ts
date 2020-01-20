import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  public getNewsFeed(): Observable<FeedItem[]> {
    return this.http.get<FeedItem[]>(`api/news`)
  }

  public getLore(): Observable<FeedItem[]> {
    return this.http.get<FeedItem[]>(`api/lore`)
  }

  public getSessionRecaps(): Observable<FeedItem[]> {
    return this.http.get<FeedItem[]>(`api/session-recaps`)
  }
}

interface FeedItem {
  title: string,
  content: string
}
