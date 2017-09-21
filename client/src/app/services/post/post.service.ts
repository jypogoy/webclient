import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';
import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class PostService {

  constructor(private http: Http) { }

  getAll(): Observable<any> {
    return this.http.get('http://jsonplaceholder.typicode.com/posts')
      .map((res: Response) => {
        return res.json();
    });
  }

}