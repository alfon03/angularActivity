import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskComponent } from '../task/task.component';

@Component({
  selector: 'app-tasks',
  imports: [CommonModule, FormsModule, TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})


export class TasksComponent {
  title = "Tareas";
  tasks = [
    { id: 1, title: 'Ir al mercadona', completed: false },
    { id: 2, title: 'Estudiar', completed: true },
    { id: 3, title: 'Ir a trabajar', completed: false }
  ];


  toggleCompleted(task: any) {
    task.completed = !task.completed;
  }



  newTask: string = '';
  error: string = '';

  addTask() {
    if (this.newTask.trim()) {
      const newTaskInput= {
        id: this.tasks.length + 1,
        title: this.newTask,
        completed: false
      };
      this.tasks.push(newTaskInput);
      this.newTask = ''; 
      this.error = ''; 
    } else {
      this.error = 'El título no puede estar vacío';
    }
  }
  @Input() task: { title: string, completed: boolean } | undefined;
}
