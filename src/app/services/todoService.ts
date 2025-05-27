import { Injectable } from "@angular/core";
import { Todo } from "../model/todo";

@Injectable({
    providedIn: 'root'
})

export class TodoService{
    list: Todo[]= [
        {   
            id: 1, 
            title: 'Marta',
            description: 'biscotti',
            createdAt: '2025-05-27',
            dueDate: '2025-05-27',
            status: false,
            categoryId: 1
        }
    ];

    getTodos(): Todo[]{
        return this.list;
    }
}