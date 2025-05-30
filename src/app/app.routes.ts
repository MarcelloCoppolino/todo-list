import { Routes } from '@angular/router';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoFormComponent } from './components/todo-form/todo-form.component';
import { TodoFormReactiveComponent } from './components/todo-form-reactive/todo-form-reactive.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent},
    { path: 'todo-list', component: TodoListComponent },
    { path: 'todo-form', component: TodoFormComponent },
    { path: 'edit-todo-form/:id', component: TodoFormComponent },
    { path: 'todo-form-reactive', component: TodoFormReactiveComponent }
];
