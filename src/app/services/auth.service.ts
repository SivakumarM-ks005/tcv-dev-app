import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private http: HttpClient) { }

  onLogin(obj: any): Observable<any>{
    return this.http.post('http://localhost:8080/api/v1/user/login', obj);
  }
}
