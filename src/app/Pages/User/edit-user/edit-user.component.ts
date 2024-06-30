import { CommonModule } from '@angular/common';
import { HttpClientModule,HttpClient ,HttpHeaders} from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../../Models/user';

@Component({
  selector: 'app-edit-user',
  standalone: true,
  imports: [FormsModule,CommonModule,HttpClientModule],
  templateUrl: './edit-user.component.html',
  styleUrl: './edit-user.component.css'
})
export class EditUserComponent {
  user:User;
  users:User[]=[];
  userId?:string;
  errMsg: string = '';
  isUserExist: boolean = false;
  showPassword = false;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    }),
  };
  constructor(private router:Router,private activateRoute: ActivatedRoute,private http:HttpClient){
    this.user=new User();
    this.activateRoute.params.subscribe((p) => (this.userId = p['userId']));
    console.log(this.userId);
    console.log('UserId:', this.userId);
   this.search();
  }
  search() {
    this.http
      .get<User>(
        'https://localhost:7074/api/User/' + this.userId,this.httpOptions
      )
      .subscribe((response) => {
        console.log(response);
        if (response != null) {
          this.user = response;
          this.isUserExist = true;
          this.errMsg = '';
        } else {
          this.errMsg = 'Invalid UserId ';
          this.isUserExist = false;
        }
      });
  }
  edit() {
    this.http
      .put('https://localhost:7074/api/User/EditUser', this.user,this.httpOptions)
      .subscribe((response) => {
        console.log(response);
      });
    this.router.navigateByUrl('/user-dashboard/getuserbyid');
  }
    
  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
}

}
