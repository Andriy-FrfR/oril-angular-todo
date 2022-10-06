import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { ModalComponent } from './components/modal/modal.component';
import { BackdropComponent } from './components/backdrop/backdrop.component';

@NgModule({
  declarations: [
    HeaderComponent,
    ModalComponent,
    BackdropComponent,
    ModalComponent,
  ],
  imports: [CommonModule],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HeaderComponent,
    BackdropComponent,
    ModalComponent,
  ],
})
export class SharedModule {}
