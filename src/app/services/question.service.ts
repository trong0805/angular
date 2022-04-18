import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  constructor(private http: HttpClient) { }
  list(subject_Code :string = ""): Observable<any>{
    return this.http.get<any>(`${environment.api}/${subject_Code}`);
  }
  addNew(data: any, id: any): Observable<any>{
    return this.http.post<any>(environment.api+ '/' + id, {...data});
  }
  delete(code: any,id: any): Observable<any>{
    return this.http.delete<any>(environment.api+ '/' + code + '/'+id);
  }
  listId(code: any,id: any): Observable<any>{
    return this.http.get<any>(environment.api+'/'+ code + '/' + id);
  }
}

