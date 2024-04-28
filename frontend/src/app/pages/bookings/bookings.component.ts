import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
declare var createGoogleEvent: any;

@Component({
  selector: 'app-bookings',
  standalone: true,
  imports: [],
  templateUrl: './bookings.component.html',
  styleUrl: './bookings.component.scss'
})
export class BookingsComponent implements OnInit {
  constructor(private fb: FormBuilder){}
  appointmentForm!: FormGroup;

  ngOnInit(){
    this.appointmentForm = this.fb.group({
      appointmentTime: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  //Function that handles the button click event to schedule a meeting 
  scheduleMeeting(){
    createGoogleEvent()

  }



}
