import { Component, inject, OnInit } from '@angular/core';
import { Todo } from '../../model/todo';
import { TodoService } from '../../services/todoService';
import { TodoCardComponent } from '../todo-card/todo-card.component';
import { TodoFormComponent } from '../todo-form/todo-form.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todo-list',
  imports: [TodoCardComponent],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent implements OnInit {
  todo!: Todo;
  list: Todo[] = [];
  private _service = inject(TodoService);

  ngOnInit(): void {
    this.loadToDo();
  }

  handleDelete(obj: { id: number }) {
    console.log(obj.id)
    this._service.deleteTodo(obj.id).subscribe({
      next: () => {
        this.list = this.list.filter((t) => t.id != obj.id);
        alert("Il To Do è stato eliminato con successo");
      },
      error: e => {
        alert("Errore nell cancellazione");
        this.loadToDo();
      }
    })
  }

  handleComplete(obj: { id: number}) {
    // const findTodo = this.findToDo(obj.id)
    this._service.toggleComplete(obj.id).subscribe({
      next: ()=> {
          alert("To Do completed");
          // this.list = this.list.map(t => this.toggleCompleteWithId(obj.id, t));
          this.loadToDo();
      },
      error: e =>alert("Errore nel modifica dello stato di completamento " + e)
    });
  }

  private toggleCompleteWithId(id:number, todo:Todo){
    if(todo.id == id){
      todo.status = !todo.status;
    }
    return todo;
  }


  loadToDo() {
    const toDoObservable: Observable<Todo[]> = this._service.getTodos();
    toDoObservable.subscribe({
      next: todos => this.list = todos,
      error: e => alert("Errore di caricamento dei To Do " + e)
    });
  }

  findToDo(id: number): Todo | any {
    this._service.getById(id).subscribe({
      next: t => {
        this.todo = t;
        return this.todo;
      },
      error: e => alert("Errore nella ricerca del To Do id")
    })

  }

}
