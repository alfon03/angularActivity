import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task',
  imports: [CommonModule],
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  @Input() task: { id: number, title: string, completed: boolean } | undefined;
  @Output() delete = new EventEmitter<number>();
  @Output() toggleCompleted = new EventEmitter<void>();

  onDelete() {
    if (this.task) {
      this.delete.emit(this.task.id); 
    }
  }

  onToggleCompleted() {
    if (this.task) {
      this.toggleCompleted.emit(); 
    }
  }
}
