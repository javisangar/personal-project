import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.services';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { PostService } from 'src/app/services/posts.services';
import { Router, ActivatedRoute } from "@angular/router";
import { PostsModel } from '../../models/posts.model';

@Component({
  selector: 'app-route',
  templateUrl: 'form-route.component.html',
  styleUrls: ['form-route.component.scss']
})
export class FormRouteComponent implements OnInit {
  
  routes: any;
  user: any;
  lat: number;
  lng: number;

  constructor(private authService: AuthService) { }
  

  ngOnInit() {
    this.user = this.authService.user;
    this.getUserLocation();
  }

  getUserLocation(){
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(position => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
      })
    }
  }

}