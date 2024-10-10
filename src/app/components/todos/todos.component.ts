import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TodosService } from '../../services/todos.service';

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

  constructor(private todosService: TodosService) {}

  ngOnInit(): void {
    this.getTodos();
  }

  getTodos() {
    this.todosService.getAllTodos().subscribe((todos) => (this.todos = todos));
  }

  toggleDone(id: string, completed: boolean): void {
    this.todosService
      .toggleDone(id, !completed)
      .subscribe(
        (todo) =>
          (this.todos = this.todos.map((task) =>
            task.id === todo.id ? todo : task
          ))
      );
  }

  removeTodo(id: string): void {
    this.todosService
      .removeTodo(id)
      .subscribe(
        (todo) =>
          (this.todos = this.todos.filter((task) => task.id !== todo.id))
      );
  }

  addTodo(): void {
    this.todosService
      .addTodo(this.inputTodo)
      .subscribe((todo) => this.todos.push(todo));
    this.inputTodo = '';
  }
}
