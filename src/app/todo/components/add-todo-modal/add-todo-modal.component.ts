import { TodoService } from './../../services/todo.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from '../../interfaces/todo.interface';

@Component({
  selector: 'app-add-todo-modal',
  templateUrl: './add-todo-modal.component.html',
  styleUrls: ['./add-todo-modal.component.scss'],
})
export class AddTodoModalComponent implements OnInit {
  @Output() todoCreatedEvent = new EventEmitter<Todo>();
  title = '';

  constructor(private todoServ: TodoService) {}

  ngOnInit(): void {}

  onSaveTodoBtnClick(): void {
    if (!this.title) {
      return;
    }

    this.todoServ
      .create({ userId: 0, title: this.title, completed: false })
      .subscribe((todo: Todo) => {
        this.todoCreatedEvent.emit(todo);
      });
  }
}
