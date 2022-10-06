import { BackdropEvents } from './../../enums/backdrop-events.enum';
import { BackdropService } from './../../services/backdrop.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-backdrop',
  templateUrl: './backdrop.component.html',
  styleUrls: ['./backdrop.component.scss'],
})
export class BackdropComponent implements OnInit {
  showBackdrop = true;

  constructor(private backdropServ: BackdropService) {}

  ngOnInit(): void {
    this.backdropServ.backdrop$.subscribe((event: BackdropEvents) => {
      if (event === BackdropEvents.Show) {
        this.showBackdrop = true;
      } else {
        this.showBackdrop = false;
      }
    });
  }

  onBackdropClick(): void {
    this.backdropServ.hideBackdrop();
  }
}
