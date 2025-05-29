import { Routes } from '@angular/router';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoFormComponent } from './components/todo-form/todo-form.component';

export const routes: Routes = [
    { path: '', redirectTo: 'todo-list', pathMatch: 'full' },
    { path: 'todo-list', component: TodoListComponent },
    { path: 'todo-form', component: TodoFormComponent },
    { path: 'edit-todo-form/:id', component: TodoFormComponent }

];
