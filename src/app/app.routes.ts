import { Routes } from '@angular/router';
import { TaskComponent } from './task/task.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { MainComponent } from './main/main.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
    {path: 'tasks', component: TaskListComponent},
    {path: '', component: MainComponent},
    {path: 'task/:id', component: TaskDetailsComponent },
    {path: 'add-task', component: AddTaskComponent},
    {path: '**', component: PageNotFoundComponent}

];
