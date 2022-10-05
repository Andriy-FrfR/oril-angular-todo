import { SharedModule } from '../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './components/todo-list/todo-list.component';

@NgModule({
  declarations: [TodoListComponent],
  imports: [CommonModule, SharedModule],
})
export class TodoModule {}
