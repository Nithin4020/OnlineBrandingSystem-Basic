import { Component, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient,HttpClientModule,HttpHeaders } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import {  HttpEventType, HttpErrorResponse } from '@angular/common/http';
import {  EventEmitter, OnInit, Output } from '@angular/core';
import { Brands } from '../../../Models/brands';


@Component({
  selector: 'app-add-brand',
  standalone: true,
  imports: [FormsModule,CommonModule,HttpClientModule],
  templateUrl: './add-brand.component.html',
  styleUrl: './add-brand.component.css'
})
export class AddBrandComponent {
  brand: Brands;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    }),
  };
  constructor(private http: HttpClient, private router: Router, private ngZone: NgZone) {
    this.brand = new Brands();
  }
  AddBrand() {
    const userId = localStorage.getItem('userId');
    if(userId!=null){
      this.brand.user_Id = parseInt(userId, 10);
      this.http
        .post('https://localhost:7074/api/Brands', this.brand,this.httpOptions)
        .subscribe((response) => {
          console.log(response);
          this.router.navigateByUrl('/admin-dashboard/getallbrands');
          
        });
      }
      else{
        this.ngZone.run(() => {
          alert('User is not active. Please SignIn to add post.');
        });
      }
  }

}
