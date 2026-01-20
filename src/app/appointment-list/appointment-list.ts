import { Component } from '@angular/core';
import { Appointment } from '../models/appointment';
import { App } from '../app';

@Component({
  selector: 'app-appointment-list',
  imports: [],
  templateUrl: './appointment-list.html',
  styleUrl: './appointment-list.css',
})
export class AppointmentList {
  appointment: Appointment = { id: 1, title: 'Dentist Appointment', date: new Date('2026-01-11') };
}
