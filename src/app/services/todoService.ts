import { Injectable } from "@angular/core";
import { Todo } from "../model/todo";

@Injectable({
    providedIn: 'root'
})

export class TodoService {
    list: Todo[] = [
        {
            id: 1, 
            title: 'Stefano',
            description: 'cuoco/programmatore',
            createdAt: '2025-05-28',
            dueDate: '2025-05-28',
            status: true,
            categoryId: 1
        },
        {
            id: 2, 
            title: 'Edoardo',
            description: 'playerpokemon',
            createdAt: '2025-05-28',
            dueDate: '2025-05-28',
            status: true,
            categoryId: 2
        },
        {
            id: 3, 
            title: 'Marcello',
            description: 'barbone',
            createdAt: '2025-05-28',
            dueDate: '2025-05-28',
            status: true,
            categoryId: 3
        }
    ];
    // constructor() {
    //     this.loadTodo();
    // }


    getTodos(): Todo[] {
        return this.list;
    }

    deleteTodo(id:number):boolean{
        const beforeLength = this.list.length;
        this.list = this.list.filter((t) => t.id != id)
        // localStorage.setItem("todos", JSON.stringify(this.list));
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