import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { TaskService } from './services/task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AdpWebLabsFront';

  constructor(private taskService: TaskService) { }

  taskResult: string = '';

  ngOnInit(): void {
    console.log('welcome to adpweblabs project');
  }

  getTaskDone(): void{
    this.taskService.getTask().subscribe(
      (result)=> {
        this.taskResult = result;
    })

  }
}


