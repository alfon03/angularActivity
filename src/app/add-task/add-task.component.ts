import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from '../interfaces/task';
import { TaskService } from '../services/task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-task',
  imports: [FormsModule],
  templateUrl: './add-task.component.html'
})
export class AddTaskComponent {
  newTask: Omit<Task, 'id'> = {
    "title": '',
    "description": '',
    "completed" : false
  }
  taskService: TaskService = inject(TaskService);
  router: Router = inject(Router);

  // constructor(private taskService: TaskService, private router: Router){}

  addTask(){
    if(this.newTask.title && this.newTask.description){
      this.taskService.addTask(this.newTask)
    }
  }
}
