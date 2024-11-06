import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Todo } from '../todo.model';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule] // Add FormsModule
})
export class TodoFormComponent {
  newTask: string = '';
  newDuration: number = 0;

  @Output() save = new EventEmitter<Todo>();

  onSave() {
    const newTodo: Todo = {
      task: this.newTask,
      completed: false,
      duration: this.newDuration
    };
    this.save.emit(newTodo);
    this.newTask = '';
    this.newDuration = 0;
  }
}
