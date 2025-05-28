import { Component, OnInit } from '@angular/core';
import { Todo } from '../../model/todo';
import { TodoService } from '../../services/todoService';
import { TodoCardComponent } from '../todo-card/todo-card.component';
import { TodoFormComponent } from '../todo-form/todo-form.component';

@Component({
  selector: 'app-todo-list',
  imports: [TodoCardComponent, TodoFormComponent],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent implements OnInit {
  list: Todo[] = [];
  addtodo: { title: string, description: string, dueDate: string, categoryId: number } | null = null;

  constructor(private _todoService: TodoService) { }

  ngOnInit(): void {
    this.list = this._todoService.getTodos();
  }

  handleDelete(obj: { id: number }) {
    const wasDelete = this._todoService.deleteTodo(obj.id);
    if (wasDelete) {
      this.list = this.list.filter(t => t.id != obj.id)
      alert("ToDo eliminato")
    } else {
      alert("Non eliminato")
    }
  }

  handleComplete(obj: {id : number }){
    const wasCompleted = this._todoService.completeTodo(obj.id)
     const todo = this.list.find((t) => t.id == obj.id);
        if (todo != null) {
            todo.completedAt = todo.status ? new Date().toISOString().split("T")[0] : null;    
        }
  }


  handleAdd(obj: { title: string, description: string, dueDate: string, categoryId: number }) {
    const { title, description, dueDate, categoryId } = obj;
    const newTodo: Todo = this._todoService.addTodo(obj);
    this.addtodo = obj;
  }


}
