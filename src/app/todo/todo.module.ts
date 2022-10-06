import { SharedModule } from '../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { AddTodoModalComponent } from './components/add-todo-modal/add-todo-modal.component';
import { RemoveTodoModalComponent } from './components/remove-todo-modal/remove-todo-modal.component';
import { UpdateTodoModalComponent } from './components/update-todo-modal/update-todo-modal.component';

@NgModule({
  declarations: [TodoListComponent, AddTodoModalComponent, RemoveTodoModalComponent, UpdateTodoModalComponent],
  imports: [CommonModule, SharedModule],
})
export class TodoModule {}
