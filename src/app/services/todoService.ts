import { Injectable } from "@angular/core";
import { Todo } from "../model/todo";

@Injectable({
    providedIn: 'root'
})

export class TodoService {
    list: Todo[] = [];
    constructor() {
        this.loadTodo();
    }


    getTodos(): Todo[] {
        return this.list;
    }

    deleteTodo(id:number):boolean{
        const beforeLength = this.list.length;
        this.list = this.list.filter((s) => s.id != id)
        localStorage.setItem("todos", JSON.stringify(this.list));
        return beforeLength != this.list.length;
        
    }

    addTodo(obj: { title: string, description: string, dueDate: string, categoryId: number }): Todo {
        const newTodo: Todo = {
            id: this.list.length + 1,
            title: obj.title,
            description: obj.description,
            createdAt: new Date().toISOString().split("T")[0],
            dueDate: obj.dueDate,
            status: false,
            categoryId: obj.categoryId
        };
        this.list.push(newTodo);
        localStorage.setItem("todos", JSON.stringify(this.list));
        return newTodo;
    }

    loadTodo(): void {
        const stored = localStorage.getItem('todos');
        this.list = stored ? JSON.parse(stored) : [];
    }
}