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

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule, MatInputModule, MatCardModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { PostComponent } from './pages/application/post/post.component';
import { RouteComponent } from './pages/application/route/route.component';
import { SaleComponent } from './pages/application/sale/sale.component';
import { PostService } from './services/posts.services';


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
    SaleComponent
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
    MatCardModule

  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
