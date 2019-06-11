import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Todo} from '../models/Todo';
const httpOptions = {
                    headers: new HttpHeaders({'Content-type':'application/json'})
}
@Injectable({
  providedIn: 'root'
})
export class ServetodoService {
   todosUrl='https://jsonplaceholder.typicode.com/todos';
   todoslimit='?_limit=20';
  constructor(private http:HttpClient) { }

  getTodos():Observable<Todo[]>
  {
    return this.http.get<Todo[]>(`${this.todosUrl}${this.todoslimit}`);
  }

  ToggleCompleted(atodo:Todo):Observable<any>
  {const url=`${this.todosUrl}/${atodo.id}`;
   return this.http.put(url,atodo,httpOptions);}

   deleteoneTodo(atodo:Todo):Observable<Todo>
   {
     const url=`${this.todosUrl}/${atodo.id}`;
     return this.http.delete<Todo>(url,httpOptions);
   }
}
