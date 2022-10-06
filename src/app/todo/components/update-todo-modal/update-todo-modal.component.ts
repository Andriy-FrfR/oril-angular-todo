import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../../interfaces/todo.interface';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-update-todo-modal',
  templateUrl: './update-todo-modal.component.html',
  styleUrls: ['./update-todo-modal.component.scss'],
})
export class UpdateTodoModalComponent implements OnInit {
  @Input('todo') todo!: Todo;
  @Output() todoUpdatedEvent = new EventEmitter<Todo>();
  title = '';

  constructor(private todoServ: TodoService) {}

  ngOnInit(): void {
    this.title = this.todo.title;
  }

  onUpdateTodoBtnClick(): void {
    if (!this.title) {
      return;
    }

    this.todoServ
      .update({
        id: this.todo.id,
        title: this.title,
        completed: this.todo.completed,
      })
      .subscribe({
        next: (todo: Todo) => {
          this.todoUpdatedEvent.emit(todo);
        },
        error: () => {
          const updatedTodo = { ...this.todo, title: this.title };
          this.todoUpdatedEvent.emit(updatedTodo);
        },
      });
  }
}
