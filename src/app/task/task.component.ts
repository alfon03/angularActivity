import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Task } from '../interfaces/task';
import { TaskService } from '../services/task.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-task',
  imports: [RouterLink],
  templateUrl: './task.component.html'
})
export class TaskComponent {

  @Input() task!: Task; 
  @Output() onDeleteTask: EventEmitter<string> = new EventEmitter();
  // constructor(private taskService: TaskService){}

  // Otra forma de inyectar el servicio
  private taskService: TaskService = inject(TaskService);

  completeTask(){
    this.taskService.changeTaskStatus(this.task.id, this.task.completed)
  }

  deleteTask(){
    this.taskService.deleteTask(this.task.id)
  }
}
