import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-user-dashboard',
  standalone: true,
  imports: [CommonModule,RouterOutlet,RouterLink],
  templateUrl: './user-dash-board.component.html',
  styleUrl: './user-dash-board.component.css'
})
export class UserDashboardComponent {
  userName: string = localStorage.getItem('userName') ?? "Guest User"; 
}
