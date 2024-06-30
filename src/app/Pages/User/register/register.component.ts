import { Component } from '@angular/core';
import { User } from '../../../Models/user';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Console } from 'node:console';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  users:User;
constructor(private router:Router,private http:HttpClient){
  this.users=new User();
}
onSubmit(): void {
  
  this.users.role="User";
  this.http.post('https://localhost:7074/api/User',this.users)
  .subscribe((response)=>{
    if(response != null)
    {
      console.log(response);
      this.router.navigateByUrl('login');
    }
    else{
      console.log("Something went wrong!");
    }
    
   
  })
}
onReset(form: NgForm): void {
  form.reset();
}
redirectToLogin() {
  this.router.navigateByUrl('login');
}


}
