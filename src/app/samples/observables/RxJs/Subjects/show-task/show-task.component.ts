import { Component, inject, OnInit } from '@angular/core';
import { MessageTaskService } from '../task-service.service';

@Component({
  selector: 'wns-show-task',
  templateUrl: './show-task.component.html',
  styleUrls: ['./show-task.component.css']
})
export class MessageShowTaskComponent implements OnInit{
  tasks: string[] = ['task 1', 'task 2', 'task 3']

  taskService: MessageTaskService = inject(MessageTaskService);

  //

  ngOnInit(){
    // Subscribing to Observable
    this.taskService.CreateTask.subscribe((value) => {
      this.tasks.push(value);
    });
  }
}