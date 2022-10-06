import { Todo } from './../interfaces/todo.interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class TodoService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${environment.baseApiUrl}/todos?_limit=4`);
  }

  create(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(`${environment.baseApiUrl}/todos`, todo);
  }

  update(todo: Todo): Observable<Todo> {
    return this.http.put<Todo>(
      `${environment.baseApiUrl}/todos/${todo.id}`,
      todo
    );
  }

  delete(todo: Todo): Observable<void> {
    return this.http.delete<void>(`${environment.baseApiUrl}/todos/${todo.id}`);
  }
}
