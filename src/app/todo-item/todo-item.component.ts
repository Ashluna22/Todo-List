import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todo } from '../todo.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class TodoItemComponent {
  @Input() todo!: Todo;
  @Output() complete = new EventEmitter<void>();
  @Output() remove = new EventEmitter<void>();

  onComplete() {
    this.complete.emit();
  }

  onRemove() {
    this.remove.emit();
  }
}

