import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterOutlet],
  templateUrl: './admin-dash-board.component.html',
  styleUrl: './admin-dash-board.component.css'
})
export class AdminDashboardComponent {
  userName: string = localStorage.getItem('userName') ?? "Guest User";
}
