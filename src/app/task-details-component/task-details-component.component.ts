import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-task-details-component',
  templateUrl: './task-details-component.component.html',
  imports: [RouterOutlet]
})
export class TaskDetailsComponent implements OnInit {
  @Input() id?: string;
  task: { id: number, title: string, completed: boolean } | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.task = this.getTaskById(id); 
    }
  }

  getTaskById(id: string): { id: number, title: string, completed: boolean } | undefined {
    const tasks = [
      { id: 1, title: 'Task 1', completed: false },
      { id: 2, title: 'Task 2', completed: true },
    ];
    return tasks.find(task => task.id.toString() === id);
  }
}
