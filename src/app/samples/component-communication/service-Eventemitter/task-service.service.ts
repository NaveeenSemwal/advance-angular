import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  CreateTask = new EventEmitter<string>();

  constructor() { }

  OnCreateTask(value : string)
  {
      this.CreateTask.emit(value);
  }
}
