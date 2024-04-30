import { NgModule } from '@angular/core'
//import {BrowserModule} from '@angular/platform-browser';
//import {AppRoutingModule} from './app-routing.module';

import { Routes, RouterModule } from '@angular/router';
import { TaskViewComponent } from './pages/task-view/task-view.component';
//import { BookingsComponent } from './pages/bookings/bookings.component'
//import { AppComponent } from './app.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { WeatherComponent } from './pages/weather/weather.component';
//import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { QuoteDisplayComponent } from './quote-display/quote-display.component';
export const routes: Routes = [
  { path: '', redirectTo: '/lists', pathMatch: 'full' },
  { path: 'login', component: LoginPageComponent },
  { path: 'lists', component: TaskViewComponent },
  { path: 'lists/:listId', component: TaskViewComponent },
  { path: 'weather', component: WeatherComponent},
  {path: 'quotes', component: QuoteDisplayComponent}
    //   {path: 'task-view', loadComponent: () =>
    //   import('./pages/task-view/task-view.component').then(
    //     (com) => com.TaskViewComponent
    //   ),
    // }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }