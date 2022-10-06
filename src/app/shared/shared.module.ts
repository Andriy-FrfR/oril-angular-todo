import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { ModalComponent } from './components/modal/modal.component';
import { BackdropComponent } from './components/backdrop/backdrop.component';

@NgModule({
  declarations: [HeaderComponent, ModalComponent, BackdropComponent],
  imports: [CommonModule],
  exports: [
    ReactiveFormsModule,
    HttpClientModule,
    HeaderComponent,
    BackdropComponent,
  ],
})
export class SharedModule {}
