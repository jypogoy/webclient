import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ProjectService {

  url = 'http://localhost:9090/api/projects';
  headers = new Headers();

  constructor(private http: Http) {
    this.headers.append('Authorization', 'Basic dXNlcjpyb290MDE=');
  }

  getAll(): Observable<any> {
    return this.http.get(this.url, {headers: this.headers})
      .map((res: Response) => {
        return res.json();
    }).catch(this.handleError);
  }

  getById(id: number): Observable<any> {
    return this.http.get(this.url + '/' + id)
      .map((res: Response) => {
        return res.json();
    }).catch(this.handleError);
  }

  addProject(project: any): Observable<any> {
    let body = JSON.stringify({ project });
    let headers = new Headers({ 'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.url, body, options).catch(this.handleError);
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
  
}
