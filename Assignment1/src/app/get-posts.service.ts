import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPost } from './post';

@Injectable({
  providedIn: 'root'
})
export class GetPostsService {

  private _url = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http: HttpClient) { }

  getPosts(): Observable<IPost []>{
    return this.http.get<IPost []>(this._url);
  }
}
