import { Component, Input } from '@angular/core';
import { Todo } from '../../model/todo';

@Component({
  selector: 'app-todo-card',
  imports: [],
  templateUrl: './todo-card.component.html',
  styleUrl: './todo-card.component.css'
})
export class TodoCardComponent {
  @Input('todo') todo!: Todo; 
}
