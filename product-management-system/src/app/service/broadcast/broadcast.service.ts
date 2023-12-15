import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventBusService {
  // Create an EventEmitter instance
  public eventEmitter: EventEmitter<any> = new EventEmitter();


  emitEvent(data: any) {
    this.eventEmitter.emit(data);
  }
}
