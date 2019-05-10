import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ApplicationComponent } from './pages/application/application.component';
import { HomeComponent } from './pages/application/home/home.component';
import { ProfileComponent } from './pages/application/profile/profile.component';
import { HeaderComponent } from './shared/header/header.component';
import { LoginComponent as LoginFormComponent } from './pages/login/login.component';
import { PagesComponent } from './pages/pages.component';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule, MatInputModule, MatCardModule, MatSelectModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { PostComponent } from './pages/application/post/post.component';
import { RouteComponent } from './pages/application/route/route.component';
import { SaleComponent } from './pages/application/sale/sale.component';

import { PostService } from './services/posts.services';
import { RouteService } from './services/routes.services';
import { SaleService } from './services/sales.service';
import { AuthService } from './services/auth.services';

import { FormPostComponent } from './shared/form-post/form-post.component';
import { FormRouteComponent } from './shared/form-route/form-route.component';
import { FormSaleComponent } from './shared/form-sale/form-sale.component';

import { TokenInterceptor } from '../app/services/token.interceptor';

import { LoginGuard } from './guards/login.guard';
import { AgmCoreModule } from '@agm/core';
import { AgmDirectionModule } from 'agm-direction';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ApplicationComponent,
    HomeComponent,
    ProfileComponent,
    HeaderComponent,
    PagesComponent,
    LoginFormComponent,
    PostComponent,
    RouteComponent,
    SaleComponent,
    FormPostComponent,
    FormRouteComponent,
    FormSaleComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatSelectModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: '**********'
    }),
    AgmDirectionModule
  ],
  providers: [PostService, RouteService, SaleService, AuthService, LoginGuard,  {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})

export class AppModule { }
