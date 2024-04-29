import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'
import { TaskService } from '../../task.service';


@Component({
  selector: 'app-task-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-view.component.html',
  styleUrl: './task-view.component.scss'
})
export class TaskViewComponent implements OnInit{
  
  constructor(private taskService: TaskService){ }

  ngOnInit() {
    
  }
  
  createNewList(title: string) {
    this.taskService.createList('Testing').subscribe((response: any) => {
      console.log(response);
    })
  }
}
