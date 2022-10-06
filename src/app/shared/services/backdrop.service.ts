import { BackdropEvents } from './../enums/backdrop-events.enum';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class BackdropService {
  backdrop$ = new Subject<BackdropEvents>();

  showBackdrop(): void {
    this.backdrop$.next(BackdropEvents.Show);
  }

  hideBackdrop(): void {
    this.backdrop$.next(BackdropEvents.Hide);
  }
}
