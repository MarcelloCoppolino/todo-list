import { Component, OnInit } from '@angular/core';
import { Todo } from '../../model/todo';
import { TodoService } from '../../services/todoService';
import { TodoCardComponent } from '../todo-card/todo-card.component';

@Component({
  selector: 'app-todo-list',
  imports: [TodoCardComponent],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent implements OnInit{
  list: Todo[]= [];
  
  constructor(private _todoService: TodoService){}
  
  ngOnInit(): void {
    this.list= this._todoService.getTodos();
  }
}
