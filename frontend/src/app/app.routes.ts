import { NgModule } from '@angular/core'
//import {BrowserModule} from '@angular/platform-browser';
//import {AppRoutingModule} from './app-routing.module';

import { Routes, RouterModule } from '@angular/router';
import { TaskViewComponent } from './pages/task-view/task-view.component';
//import { BookingsComponent } from './pages/bookings/bookings.component'
import { AppComponent } from './app.component';
//import { ReactiveFormsModule } from '@angular/forms';


export const routes: Routes = [
      {path: 'task-view', loadComponent: () =>
      import('./pages/task-view/task-view.component').then(
        (com) => com.TaskViewComponent
      ),
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }