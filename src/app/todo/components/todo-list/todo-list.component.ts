import { BackdropEvents } from './../../../shared/enums/backdrop-events.enum';
import { BackdropService } from './../../../shared/services/backdrop.service';
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
  activeTodo!: Todo;
  showAddTodoModal = false;
  showRemoveTodoModal = false;
  showUpdateTodoModal = false;

  constructor(
    private todoServ: TodoService,
    private backdropServ: BackdropService
  ) {}

  ngOnInit(): void {
    this.todoServ.getAll().subscribe((todos: Todo[]) => {
      this.todos = todos;
    });

    this.backdropServ.backdrop$.subscribe((event: BackdropEvents) => {
      if (event === BackdropEvents.Hide) {
        this.showAddTodoModal = false;
        this.showRemoveTodoModal = false;
        this.showUpdateTodoModal = false;
      }
    });
  }

  onCheckboxClick(event: Event, todo: Todo): void {
    event.preventDefault();

    this.todoServ.update({ ...todo, completed: !todo.completed }).subscribe({
      next: (updatedTodo) => {
        Object.assign(todo, updatedTodo);
      },
      error: () => {
        todo.completed = !todo.completed;
      },
    });
  }

  onAddTodoBtnClick(): void {
    this.backdropServ.showBackdrop();
    this.showAddTodoModal = true;
  }

  onRemoveTodoBtnClick(todo: Todo): void {
    this.backdropServ.showBackdrop();
    this.showRemoveTodoModal = true;
    this.activeTodo = todo;
  }

  onUpdateTodoBtnClick(todo: Todo): void {
    this.backdropServ.showBackdrop();
    this.showUpdateTodoModal = true;
    this.activeTodo = todo;
  }

  onTodoCreated(todo: Todo): void {
    this.todos.unshift(todo);
    this.backdropServ.hideBackdrop();
  }

  onTodoRemoved(todo: Todo): void {
    this.todos = this.todos.filter((t) => t !== todo);
    this.backdropServ.hideBackdrop();
  }

  onTodoUpdated(todo: Todo): void {
    this.activeTodo.title = todo.title;
    this.backdropServ.hideBackdrop();
  }
}
