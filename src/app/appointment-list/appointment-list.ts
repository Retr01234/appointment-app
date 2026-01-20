import { Component } from '@angular/core';
import { Appointment } from '../models/appointment';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-appointment-list',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './appointment-list.html',
  styleUrl: './appointment-list.css',
})

export class AppointmentList {
  newAppointmentTitle: string = '';
  newAppointmentDate: Date = new Date();
  appointments: Appointment[] = [];

  addAppointment() {
    this.appointments.push({
      id: this.appointments.length + 1,
      title: this.newAppointmentTitle,
      date: this.newAppointmentDate,
    });
    this.newAppointmentTitle = '';
    this.newAppointmentDate = new Date();
  }
}
