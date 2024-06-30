import { Routes } from '@angular/router';
import { LoginComponent } from './Pages/User/login/login.component';
import { RegisterComponent } from './Pages/User/register/register.component';
import { HomeComponent } from './Pages/User/home/home.component';
import { UserDashboardComponent } from './Pages/User/user-dash-board/user-dash-board.component';
import { GetAllBrandsComponent } from './Pages/Brands/get-all-brands/get-all-brands.component';
import { LogoutComponent } from './Pages/User/logout/logout.component';
import { GetBrandsByBrandIdComponent } from './Pages/Brands/get-brands-by-brand-id/get-brands-by-brand-id.component';
import { GetuserbyidComponent } from './Pages/User/get-user-by-id/get-user-by-id.component';
import { EditUserComponent } from './Pages/User/edit-user/edit-user.component';
import { AdminDashboardComponent } from './Pages/User/admin-dash-board/admin-dash-board.component';
import { GetAllUsersComponent } from './Pages/User/get-all-users/get-all-users.component';
import { AddBrandComponent } from './Pages/Brands/add-brand/add-brand.component';
import { GetPageViewsByBrandIdComponent } from './Pages/PageViews/get-page-views-by-brand-id/get-page-views-by-brand-id.component';
import { EditBrandComponent } from './Pages/Brands/edit-brand/edit-brand.component';


export const routes: Routes = [
    {path:'user-dashboard',component:UserDashboardComponent,
    children:[
      { path: 'getallbrands', component: GetAllBrandsComponent },
      { path: 'logout', component: LogoutComponent },
      {path:'viewbrand/:brandId',component:GetBrandsByBrandIdComponent},
      {path:'getuserbyid',component:GetuserbyidComponent},
      {path:'edit-user/:userId',component:EditUserComponent},

    ]},
    { path: 'admin-dashboard', component: AdminDashboardComponent,
    children: [
     { path: 'getallbrands', component:GetAllBrandsComponent},
      {path:'edit-user/:uid',component:EditUserComponent},
      {path:'addbrand',component:AddBrandComponent},
      {path:'getallusers',component:GetAllUsersComponent},
      {path:'viewbrand/:brandId',component:GetBrandsByBrandIdComponent},
      {path:'edit-brand/:brandId',component:EditBrandComponent},
      { path: 'logout', component: LogoutComponent }, 
    ],
  },
    {path: 'login', component: LoginComponent},
    {path: 'register', component:RegisterComponent},
    {path: '', component:HomeComponent},
    ];
