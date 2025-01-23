import { Routes } from '@angular/router';
import { TaskComponent } from './task/task.component';
import { TaskDetailsComponent } from './task-details-component/task-details-component.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import { MainComponent } from './main/main.component';
export const routes: Routes = [

    {path: 'task', component: TaskComponent, children: [
        {
        path: ':id', 
        component: TaskDetailsComponent, 
        }
      
        ]
    },
    {path: 'index', component: MainComponent},
    { path: 'taskDetails/:id', component: TaskDetailsComponent },
    { path: 'task/:search', component: TaskDetailsComponent },
    { path: '', redirectTo: 'index', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponentComponent },
];
