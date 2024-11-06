// src/app/app.routes.ts
import { HomeComponent } from './home/home.component';
import { TodoComponent } from './todo/todo.component';

export const routes = [
  { path: '', component: HomeComponent },
  { path: 'todos', component: TodoComponent }
];
