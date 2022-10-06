import { BackdropService } from './../../services/backdrop.service';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  @Input('title') title!: string;

  constructor(private backdropServ: BackdropService) {}

  onCloseBtnClick(): void {
    this.backdropServ.hideBackdrop();
  }
}
