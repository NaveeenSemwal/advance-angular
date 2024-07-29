import { Component, inject } from '@angular/core';
import { MessageTaskService } from '../task-service.service';


@Component({
  selector: 'wns-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class MessageNewTaskComponent {
  newTask: string = '';
  taskService: MessageTaskService = inject(MessageTaskService);
  
  OnCreateTask(){
    console.log(this.newTask);
    this.taskService.OnCreateTask(this.newTask);
  }
}