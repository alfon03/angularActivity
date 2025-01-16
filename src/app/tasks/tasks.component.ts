import { Component } from '@angular/core';
import { TaskComponent } from '../task/task.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tasks',
  imports: [CommonModule, TaskComponent, FormsModule],
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent {
  title = 'Tareas';
  tasks = [
    { id: 1, title: 'Ir al mercadona', completed: false },
    { id: 2, title: 'Estudiar', completed: true },
    { id: 3, title: 'Ir a trabajar', completed: false }
  ];

  newTask: string = '';
  error: string = '';

  toggleCompleted(task: any) {
    task.completed = !task.completed;
  }

  addTask() {
    if (this.newTask.trim()) {
      const newTask = {
        id: this.tasks.length + 1,
        title: this.newTask,
        completed: false
      };
      this.tasks.push(newTask);
      this.newTask = '';
      this.error = '';
    } else {
      this.error = 'El título no puede estar vacío';
    }
  }

  deleteTask(taskId: number) {
    this.tasks = this.tasks.filter(task => task.id !== taskId);
  }
}
