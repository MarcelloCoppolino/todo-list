import { inject, Injectable } from "@angular/core";
import { Todo } from "../model/todo";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class TodoService {
    list: Todo[] = [];
    private _url: string = "http://localhost:8080/api/todos"
    private _http = inject(HttpClient)
    // constructor() {
    //     this.loadTodo();
    // }


    getTodos(): Observable<Todo[]> {
        return this._http.get<Todo[]>(this._url);
    }

    deleteTodo(id: number): Observable<void> {
        return this._http.delete<void>(`${this._url}/${id}`);

    }

    getById(id: number): Observable<Todo> {
        return this._http.get<Todo>(`${this._url}/${id}`);
    }


    addTodo(todo: Partial<Todo>): Observable<Todo> {
        return this._http.post<Todo>(this._url, todo);
    }

    updateTodo(todo: Todo): Observable<void> {
        return this._http.put<void>(`${this._url}/${todo.id}`, todo);
    }

    toggleComplete(id: number): Observable<void> {
        return this._http.put<void>(`${this._url}/${id}/complete`, null);
    }
}