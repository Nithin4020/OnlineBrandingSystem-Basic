import { CommonModule } from '@angular/common';
import { HttpClientModule,HttpClient ,HttpHeaders} from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Brand } from '../../../Models/brand';
import { Brands } from '../../../Models/brands';

@Component({
  selector: 'app-edit-brand',
  standalone: true,
  imports: [FormsModule,CommonModule,HttpClientModule],
  templateUrl: './edit-brand.component.html',
  styleUrl: './edit-brand.component.css'
})
export class EditBrandComponent {
  brand: Brands;
  brandId: number = -1;
  errMsg: string = '';
  isBrandExist: boolean = false;
  showPassword = false;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    }),
  };
  constructor(private router:Router,private activateRoute: ActivatedRoute,private http:HttpClient){
    this.brand=new Brands();
    this.activateRoute.params.subscribe((p) => (this.brandId = p['brandId']));
   this.search();
  }
  search() {
    this.http
      .get<Brands>(
        'https://localhost:7074/api/Brands/' + this.brandId,this.httpOptions
      )
      .subscribe((response) => {
        console.log(response);
        if (response != null) {
          this.brand = response;
          this.isBrandExist = true;
          this.errMsg = '';
        } else {
          this.errMsg = 'Invalid UserId ';
          this.isBrandExist = false;
        }
      });
  }
  edit() {
    this.http
      .put('https://localhost:7074/api/Brands', this.brand,this.httpOptions)
      .subscribe((response) => {
        console.log(response);
      });
    this.router.navigateByUrl('/admin-dashboard/getallbrands');
  }


}
