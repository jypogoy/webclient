import { map } from 'rxjs/operator/map';
import { Observable } from 'rxjs/Rx';
import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ProjectService {

  constructor(private http: Http) { }

  getAll(): Observable<any> {
    return this.http.get('http://localhost:8080/api/projects')
      .map((res: Response) => {
        res.json();
    })
  }

}
