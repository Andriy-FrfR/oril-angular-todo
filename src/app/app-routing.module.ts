import { TodoListComponent } from './todo/components/todo-list/todo-list.component';
import { SignUpComponent } from './auth/components/sign-up/sign-up.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: SignUpComponent },
  { path: 'todo', component: TodoListComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
