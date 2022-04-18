import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  update(user: any):Observable<any>{
    return this.http.put<any>(`${environment.user_api}/${user.id}`, {...user});
  }
}
