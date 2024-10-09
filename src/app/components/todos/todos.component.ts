import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css',
})
export class TodosComponent implements OnInit {
  todos: Todo[] = [];
  inputTodo: string = '';

  constructor() {}

  ngOnInit(): void {
    this.todos = [
      { content: 'First Todo Task', completed: false },
      { content: 'Second Todo Task', completed: false },
    ];
  }

  toggleDone(index: number): void {
    this.todos[index].completed = this.todos[index].completed ? false : true;
  }

  removeTodo(index: number): void {
    this.todos.splice(index, 1);
  }

  addTodo(): void {
    this.todos.push({ completed: false, content: this.inputTodo });
    this.inputTodo = '';
  }
}
