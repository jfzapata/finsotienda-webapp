import { Injectable } from '@angular/core';

import { Subject, Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';

// Own
// Types
import { EventI } from '@app/common/types/interfaces/event';

@Injectable({
  providedIn: 'root'
})
export class EventEmitterService {
  private subject$ = new Subject();
  constructor() { }

  public emit(event: EventI): void {
    this.subject$.next(event);
  }

  public on(eventName: string, action: (data: any) => any): Subscription {
    return this.subject$.pipe(
      filter((e: any) => e.eventName === eventName),
      map((e: EventI) => e.data)).subscribe(action);
  }
}
