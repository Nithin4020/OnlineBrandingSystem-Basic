import { User } from '../../../Models/user';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule ,HttpHeaders} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-getuserbyid',
  standalone: true,
  imports: [CommonModule,HttpClientModule,FormsModule],
  templateUrl: './get-user-by-id.component.html',
  styleUrl: './get-user-by-id.component.css'
})
export class GetuserbyidComponent{
  users:User[]=[];
  user:User;
  userId?:number;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    }),
  };

  constructor(private http: HttpClient, private router: Router) {
   this.user=new User();
  }

  ngOnInit() {
    this.getUserById();
  }
  getUserById() {
    const userId = localStorage.getItem('userId') || 'defaultUserId';
    console.log('UserId:', userId);
    const url = `https://localhost:7074/api/User/${userId}`;
  
    this.http.get<User>(url,this.httpOptions).subscribe(
      (response) => {
        if (response != null) {
          this.users = [response]; // Wrap the single user object in an array
          console.log("User", this.users);
        }
      },
      (error) => {
        console.error('Error fetching user:', error);
      }
    );
  }

  delete(userID: any) {
    this.userId = userID;
    console.log(typeof this.userId);
    console.log(this.userId);
    this.http
      .delete('https://localhost:7074/api/User/' + this.userId,this.httpOptions)
      .subscribe((response) => {
        console.log(response);
        this.getUserById();
      });
  }
  edit(userId: any) {
    console.log("UserId",userId);
    this.router.navigateByUrl(`/user-dashboard/edit-user/${userId}`);
  }
}
