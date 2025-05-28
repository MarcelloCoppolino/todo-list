import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../../model/todo';

@Component({
  selector: 'app-todo-card',
  imports: [],
  templateUrl: './todo-card.component.html',
  styleUrl: './todo-card.component.css'
})
export class TodoCardComponent {
  @Input('todo') todo!: Todo; 
  @Output("deleteTodo") deleteTodo = new EventEmitter<{id:number}>();
  @Output("completeTodo") completeTodo = new EventEmitter<{id:number}>(); 

  onDelete(){
    this.deleteTodo.emit({id : this.todo.id});
  }
  onComplete(){
    this.completeTodo.emit({id : this.todo.id})
  }
}
