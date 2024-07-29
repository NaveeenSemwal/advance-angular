import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageTaskService {

  CreateTask = new Subject<string>();

  constructor() { }

  OnCreateTask(value : string)
  {
      this.CreateTask.next(value);
  }
}
