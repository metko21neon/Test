import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {IComment, IPost, IUser} from '../interfaces/post.interfaces';

@Injectable({
  providedIn: 'root'
})
export class RestDatasourceService {
  public baseUrl: string;
  constructor(private http: HttpClient) {
    this.baseUrl = 'https://jsonplaceholder.typicode.com/';
  }

  public getUser(id: number): Observable<IUser> {
    return this.http.get<IUser>(this.baseUrl + `users/${id}`).pipe(catchError((error: any) => throwError(error)));
  }

  public getComments(id: number): Observable<IComment[]> {
    return this.http.get<IComment[]>(this.baseUrl + `comments?postId=${id}`).pipe(catchError((error: any) => throwError(error)));
  }

  public getPosts(): Observable<IPost[]> {
    return this.http.get<IPost[]>(this.baseUrl + 'posts/').pipe(catchError((error: any) => throwError(error)));
  }

  public getPost(id: number): Observable<IPost> {
    return this.http.get<IPost>(this.baseUrl + `posts/${id}`).pipe(catchError((error: any) => throwError(error)));
  }

  public addPost(post: IPost): Observable<IPost> {
    return this.http.post(this.baseUrl + 'posts/', post).pipe(catchError((error: any) => throwError(error)));
  }

  public deletePost(id: number): Observable<IPost> {
    return this.http.delete(this.baseUrl + `favorites/${id}`).pipe(catchError((error: any) => throwError(error)));
  }
}
