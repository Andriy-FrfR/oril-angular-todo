import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Todo } from '../../interfaces/todo.interface';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = [];

  constructor(private todoServ: TodoService) {}

  ngOnInit(): void {
    this.todoServ.getAll().subscribe((todos: Todo[]) => {
      this.todos = todos;
    });
  }

  onCheckboxClick(event: Event, todo: Todo): void {
    event.preventDefault();

    this.todoServ.update({ ...todo, completed: !todo.completed }).subscribe({
      next: () => {
        todo.completed = !todo.completed;
      },
      error: () => {
        todo.completed = !todo.completed;
      },
    });
  }
}
