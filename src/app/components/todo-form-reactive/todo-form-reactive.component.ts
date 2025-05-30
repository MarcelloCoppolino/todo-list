import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TodoService } from '../../services/todoService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo-form-reactive',
  imports: [ReactiveFormsModule],
  templateUrl: './todo-form-reactive.component.html',
  styleUrl: './todo-form-reactive.component.css'
})
export class TodoFormReactiveComponent {
  private _service = inject(TodoService);
  private _router = inject(Router);
  formBuilder = inject(FormBuilder);
  todoForm: FormGroup;

  constructor() {
    this.todoForm = this.formBuilder.group({
      title: ["", Validators.required],
      description: ["", Validators.required],
      dueDate: ["",[Validators.required, this.checkDateNotInPast.bind(this)]],
      categoryId: ["", Validators.required],
    })
  }

  checkDateNotInPast(control: FormControl) {
    const date = new Date(control.value);
    if (date < new Date()) {
      return { dateInPast: true };
    }
    return null;
  }

  onSubmit() {
    return this._service.addTodo(this.todoForm.value).subscribe({
      next: t => {
        alert("To Do aggiunto")
        this._router.navigate(['/todo-list']);
      },
      error : e=> alert("Errore nell aggiunta")
    });
  }
 
  get title(){
    return this.todoForm.get("title");
  }
   get description(){
    return this.todoForm.get("description");
  }
   get dueDate(){
    return this.todoForm.get("dueDate");
  }
   get categoryId(){
    return this.todoForm.get("categoryId");
  }
}
