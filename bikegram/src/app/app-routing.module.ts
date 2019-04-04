import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApplicationComponent } from './pages/application/application.component';
import { HomeComponent } from './pages/application/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ProfileComponent } from './pages/application/profile/profile.component';

import { PostComponent } from './pages/application/post/post.component';
import { RouteComponent } from './pages/application/route/route.component';
import { SaleComponent } from './pages/application/sale/sale.component';



const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },{
    path: 'home',
    component: HomeComponent
  },{
    path: 'profile',
    component: ProfileComponent
  },{
    path: 'post/:id',
    component: PostComponent
  },{
    path: 'route/:id',
    component: RouteComponent
  },{
    path: 'sale/:id',
    component: SaleComponent
  },{
    path: 'login',
    component: LoginComponent,
  },{
    path: 'register',
    component: RegisterComponent
  },{
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },{
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
