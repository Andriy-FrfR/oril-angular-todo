import { TodoService } from './../../services/todo.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../../interfaces/todo.interface';

@Component({
  selector: 'app-remove-todo-modal',
  templateUrl: './remove-todo-modal.component.html',
  styleUrls: ['./remove-todo-modal.component.scss'],
})
export class RemoveTodoModalComponent implements OnInit {
  @Input('todo') todo!: Todo;
  @Output() todoRemovedEvent = new EventEmitter<Todo>();

  constructor(private todoServ: TodoService) {}

  ngOnInit(): void {}

  onRemoveTodoBtnClick(): void {
    this.todoServ.delete(this.todo).subscribe({
      next: () => {
        this.todoRemovedEvent.emit(this.todo);
      },
      error: () => {
        this.todoRemovedEvent.emit(this.todo);
      },
    });
  }
}
