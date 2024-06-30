import { Component } from '@angular/core';
import { HttpClient,HttpClientModule,HttpHeaders} from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Brand } from '../../../Models/brand';

@Component({
  selector: 'app-get-all-brands',
  standalone: true,
  imports: [CommonModule,HttpClientModule,FormsModule],
  templateUrl: './get-all-brands.component.html',
  styleUrl: './get-all-brands.component.css'
})
export class GetAllBrandsComponent {

  brands:Brand[]=[];
  brandId?:number;
  brand:Brand;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    }),
  };
  constructor(private http:HttpClient,private router:Router)
{
  this.getAllBrands();
  this.brand=new Brand();
}
ngOnInit() {
 this.getAllBrands();
}
getAllBrands(){
    this.http
    .get<Brand[]>('https://localhost:7074/api/Rating').subscribe((response) =>{
    if(response!=null && response.length > 0){
       this.brands=response;
       console.log("Brand",this.brands);
     }
   });
}

  view(brandId:any){
    const userRole = localStorage.getItem('userRole')?? "guest";
    if(userRole === "User")
    {
      this.router.navigateByUrl('/user-dashboard/viewbrand/'+brandId);

    }
    else if (userRole === "Admin")
    {
      this.router.navigateByUrl('/admin-dashboard/viewbrand/'+brandId);
    }
  }


}
