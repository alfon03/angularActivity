import { Injectable } from '@angular/core';
import { Task } from '../interfaces/task';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private url: string = "http://localhost:3000/tasks";
  constructor(private httpClient: HttpClient) { }

  private taskSubject$ = new BehaviorSubject<Task[]>([]);

  get tasks(){
    return  this.taskSubject$.asObservable();
  }

  getTasks(): void {
    this.httpClient.get<Task[]>(this.url)
    .subscribe({
      next: tasks => this.taskSubject$.next(tasks),
      error: error => console.error('Error al obtener las tareas:', error)

    })
  }

  getTask(id: string): Observable<Task> {
    return this.httpClient.get<Task>(`${this.url}/${id}`)
  }

  addTask(task: Omit<Task, 'id'>): void {
    this.httpClient.post<Task>(this.url, task).subscribe({
      next: newTask => {
        this.taskSubject$.next([...this.taskSubject$.getValue(), newTask]);
      },
      error: error => console.error('Error al añadir la tarea:', error)
    });
  }
  deleteTask(id: string): void {
    this.httpClient.delete<Task>(`${this.url}/${id}`)
    .subscribe({
      // next: task => this.taskSubject$.next(this.taskSubject$.getValue().filter(task=> task.id != id)) ,
      next: task => this.getTasks(),
      error: error => console.log(error)
    })
  }

  changeTaskStatus(id: string, complete: boolean): void {
    this.httpClient.patch<Task>(`${this.url}/${id}`, { completed: !complete }).subscribe({
      next: (updatedTask) => {
        const tasks = this.taskSubject$.getValue();
        const taskIndex = tasks.findIndex((task) => task.id === id);  
  
        if (taskIndex !== -1) {
          tasks[taskIndex] = updatedTask; 
          this.taskSubject$.next([...tasks]);
        }
      },
      error: (error) => {
        console.error('Error al actualizar la tarea:', error);
      }
    });
  }
  

}
