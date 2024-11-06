import { Component } from '@angular/core';
import { Todo } from './todo.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoFormComponent } from './todo-form/todo-form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, TodoItemComponent, TodoFormComponent]
})
export class AppComponent {
  todos: Todo[] = [
    { task: "Learn TypeScript", completed: true, duration: 60 },
    { task: "Build a Todo App", completed: false, duration: 120 },
    { task: "Walk the dog", completed: false, duration: 30 },
    { task: "Read a book", completed: true, duration: 45 },
    { task: "Write a blog post", completed: false, duration: 90 }
  ];

  addTodo(newTodo: Todo) {
    this.todos.push(newTodo);
  }

  completeTodo(todo: Todo) {
    todo.completed = true;
  }

  removeTodo(todo: Todo) {
    this.todos = this.todos.filter(t => t !== todo);
  }
}
