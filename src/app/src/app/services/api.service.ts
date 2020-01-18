import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  public getNewsFeed(): Observable<FeedItem[]> {
    return this.http.get<FeedItem[]>(`${process.env.host}/api/news`)
  }

  public getLore(): Observable<FeedItem[]> {
    return this.http.get<FeedItem[]>(`${process.env.host}/api/lore`)
  }

  public getSessionRecaps(): Observable<FeedItem[]> {
    return this.http.get<FeedItem[]>(`${process.env.host}/api/session-recaps`)
  }
}

interface FeedItem {
  title: string,
  content: string
}
