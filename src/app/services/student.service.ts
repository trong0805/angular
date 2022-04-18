import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }
  list(searchKeyword :string = ""): Observable<any>{
    return this.http.get<any>(`${environment.user_api}?email_like=${searchKeyword}`);
  }
  listStudentId(id: any): Observable<any>{
    return this.http.get<any>(environment.user_api+ '/' + id);
  }
  addNew(data: any): Observable<any>{
    return this.http.post<any>(environment.user_api, {...data});
  }
  update(data: any, id: any): Observable<any>{
    return this.http.put<any>(environment.user_api+ '/' + id, {...data});
  }
  delete(id: any): Observable<any>{
    return this.http.delete<any>(environment.user_api+ '/' + id);
  }
}
