import { Component,OnChanges  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient,HttpClientModule,HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from '../../../Models/user';
import { FormsModule } from '@angular/forms';
import { ChangeDetectorRef } from '@angular/core';
import { NgZone} from '@angular/core';

@Component({
  selector: 'app-get-all-users',
  standalone: true,
  imports: [HttpClientModule,CommonModule,FormsModule],
  templateUrl: './get-all-users.component.html',
  styleUrl: './get-all-users.component.css'
})
export class GetAllUsersComponent implements OnChanges {
  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    }),
  };
  ngOnChanges() {
    this.cdr.detectChanges();
  }

  users:User[]=[];
  user:User;
  userId?:any;
  userName?:any;
 

  constructor(private http:  HttpClient,private router:Router,private cdr: ChangeDetectorRef, private ngZone: NgZone){
    this.user=new User();
    this.getAllUsers();
    this.userName='';
   
  }
  getAllUsers(){
    this.http
    .get<User[]>('https://localhost:7074/api/User/all',{params:{roles:"User"},headers: this.httpOptions.headers,})
    .subscribe((response)=>{
      this.users=response;
      console.log(this.users);
    })
  }
  
 
  
}