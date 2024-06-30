import { Component, NgZone } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule ,HttpHeaders} from '@angular/common/http';
import { FormsModule} from '@angular/forms';
import { Router ,ActivatedRoute} from '@angular/router';
import { CommonModule } from '@angular/common';
import { Brand } from '../../../Models/brand';
import { Brands } from '../../../Models/brands';
import { Rating } from '../../../Models/rating';
import { response } from 'express';
import { PageViews } from '../../../Models/page-views';

@Component({
  selector: 'app-get-brands-by-brand-id',
  standalone: true,
  imports: [CommonModule,HttpClientModule,FormsModule],
  templateUrl: './get-brands-by-brand-id.component.html',
  styleUrl: './get-brands-by-brand-id.component.css'
})
export class GetBrandsByBrandIdComponent {
  brandId?: number = 0;
  brand: Brands;
  brands:Brands[]=[];
  pageViews: PageViews;
  errMsg: string = '';
  isBrandExist: boolean = false;
  rating:Rating;
  ratings: Rating[]=[];
  ratingValue: number = 0;
  userRole: string ='';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    }),
  };

  constructor(private http:HttpClient,private router:Router,private activateRoute:ActivatedRoute, private ngZone: NgZone){
    this.brand = new Brands();
    this.rating=new Rating();
    this.pageViews = new PageViews();
    this.userRole = localStorage.getItem('userRole')?? "Guest";
    this.activateRoute.params.subscribe((p) => (this.brandId = p['brandId']));
    console.log(this.brandId);
    this.search();
  }
  search() {
    const bid = this.brandId?? -1;
    this.http.get<PageViews>(`https://localhost:7074/api/PageViews/${bid}`, {headers: this.httpOptions.headers,})
      .subscribe((response)=>{
        if(response != null)
        {
          this.pageViews = response;
          console.log("pageviews",this.pageViews);
        }
      })
    this.http
      .get<Brands>('https://localhost:7074/api/Brands/' + this.brandId,this.httpOptions)
      .subscribe((response) => {
        console.log(response);
        if (response != null) {
          this.brands = [response];
          this.isBrandExist = true;
          this.errMsg = '';
        } else {
          this.errMsg = 'Invalid URL';
          this.isBrandExist = false;
        }
    });
    this.http.get<number>('https://localhost:7074/api/Rating/all/'+this.brandId)
    .subscribe((res: number) => {
      this.ratingValue = res;
    },
    (error) => {
      console.error('Error fetching rating:', error);
    })
    
    const userId = localStorage.getItem('userId') ?? -1;
    if(userId !== -1)
    {
      this.http.put(`https://localhost:7074/api/PageViews/${bid}`, this.httpOptions)
      .subscribe((response)=>{
        console.log("pageviews",response);
      })
      this.http.get<Rating[]>(`https://localhost:7074/api/Rating/user/${userId}`,{params:{brandId: bid}, headers: this.httpOptions.headers,})
      .subscribe((response)=>{
        console.log("ratings",response);
        if(response != null && response.length > 0){
          this.ratings = response;
          console.log(this.ratings);
        }

      })
    }
    
  }
     addRating(brandId:any) {
      if(this.rating.rating !=null){
        const userId=localStorage.getItem('userId');
        if(userId!=null){
         this.rating.user_Id = parseInt(userId, 10);
         this.rating.brand_Id = brandId;
         this.http
           .post('https://localhost:7074/api/Rating', this.rating,this.httpOptions)
           .subscribe((response) => {
             console.log(response);
             this.rating.rating = 0;
             this.router.navigateByUrl('/user-dashboard/viewbrand/'+brandId);
            });
          }
          else{
            this.ngZone.run(() => {
              alert('User is not active. Please activate your account.');
          });
        }
        }
  }
Edit(brand_Id: any)
{
  this.router.navigateByUrl('/admin-dashboard/edit-brand/'+brand_Id);
}
Delete(brand_Id: any)
{
  this.http.delete('https://localhost:7074/api/Brands/'+brand_Id, this.httpOptions).subscribe((response)=>{
    if(response != null)
    {
      this.router.navigateByUrl('/admin-dashboard/getallbrands');
    }
  })
}
}
