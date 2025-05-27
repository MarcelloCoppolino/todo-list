import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../../model/todo';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-form',
  imports: [FormsModule, CommonModule],
  templateUrl: './todo-form.component.html',
  styleUrl: './todo-form.component.css'
})
export class TodoFormComponent {

  // @Output('addTodo') addTodo = new EventEmitter<{title: string , description:string,dueDate:string, categoryId:number}>();
  // onAdd(){
  //   this.addTodo.emit({title: this.todo.title, description: this.todo.description,
  //                     dueDate: this.todo.dueDate, categoryId: this.todo.categoryId});
  // }

  title = "";
  description= "";
  dueDate= "";
  categoryId = 0;
  @Output('addTodo') addTodo = new EventEmitter<{title: string , description:string,dueDate:string, categoryId:number}>();
  onSubmit(){
    this.addTodo.emit({title: this.title, description: this.description,
                       dueDate: this.dueDate, categoryId: this.categoryId});
  }
}
