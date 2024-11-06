import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Todo {
  task: string;
  completed: boolean;
  duration: number;
}

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class TodoComponent {
  todos: Todo[] = [
    { task: "Learn TypeScript", completed: true, duration: 60 },
    { task: "Build a Todo App", completed: false, duration: 120 },
    { task: "Walk the dog", completed: false, duration: 30 },
    { task: "Read a book", completed: true, duration: 45 },
    { task: "Write a blog post", completed: false, duration: 90 }
  ];

  constructor() {}
}

