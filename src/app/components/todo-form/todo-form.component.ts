import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../../model/todo';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TodoService } from '../../services/todoService';
import { ActivatedRoute, Router } from '@angular/router';
import { find } from 'rxjs';

@Component({
  selector: 'app-todo-form',
  imports: [FormsModule, CommonModule],
  templateUrl: './todo-form.component.html',
  styleUrl: './todo-form.component.css'
})
export class TodoFormComponent implements OnInit {

  private _service = inject(TodoService);
  private _route = inject(ActivatedRoute)
  private _router = inject(Router);
  private _isUpdated = false;
  today = new Date().toISOString().split("T")[0];

  ngOnInit(): void {
    const id = this._route.snapshot.paramMap.get("id");
    if (id != null) {
      this._isUpdated = true;
      const todoId = Number(id); // si potrebbe castare anche con il +id
      if (todoId > 0 && !isNaN(todoId)) {
        this.findToDo(todoId);
      } else {
        alert("Mi devi dare un numero maggiore di 0")
      }
    }
  }

  todo: Partial<Todo> = { title: "", description: "", dueDate: "", categoryId: 0 };

  onSubmit(todoform: NgForm) {
    if (!this._isUpdated) {
      this._service.addTodo(this.todo).subscribe({
        next: t => {
          alert("TO DO  salvato " + t.id);
          this._router.navigate(['/todo-list']);
        },
        error: e => alert("Errore nella creazione del to do")
      })
    } else {
      this._service.updateTodo(this.todo as Todo).subscribe({
        next: t => {
          alert("TO DO aggiornato correttamente");
          this._router.navigate(['/todo-list']);
        },
        error: e => alert("Errore nella creazione del to do")
      })
    }

  }


  findToDo(id: number) {
    this._service.getById(id).subscribe({
      next: t => this.todo = t,
      error: e => alert("Errore nella ricerca del To Do id")
    })
  }


}
