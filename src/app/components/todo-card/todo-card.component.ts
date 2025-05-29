import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Todo } from '../../model/todo';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo-card',
  imports: [],
  templateUrl: './todo-card.component.html',
  styleUrl: './todo-card.component.css'
})
export class TodoCardComponent {
  private _router = inject(Router);

  @Input('todo') todo!: Todo;
  @Output("deleteTodo") deleteTodo = new EventEmitter<{ id: number }>();
  @Output("toggleComplete") toggleComplete = new EventEmitter<{ id: number }>();


  onDelete() {
    console.log(this.todo.id)
    this.deleteTodo.emit({ id: this.todo.id });
  }
  onToggleComplete() {
    this.toggleComplete.emit({ id: this.todo.id });
  }

  onUpdate() {
    this._router.navigate(['/edit-todo-form', this.todo.id]);
  }
}
