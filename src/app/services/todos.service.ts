import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../models/Todo';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  private API_URL = 'http://localhost:3000/todos';

  constructor(private http: HttpClient) {}

  getAllTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.API_URL);
  }

  addTodo(content: string): Observable<Todo> {
    return this.http.post<Todo>(this.API_URL, { content });
  }

  toggleDone(id: string, completed: boolean): Observable<Todo> {
    return this.http.post<Todo>(`${this.API_URL}/${id}`, { completed });
  }

  removeTodo(id: string): Observable<Todo> {
    return this.http.delete<Todo>(`${this.API_URL}/${id}`);
  }
}
