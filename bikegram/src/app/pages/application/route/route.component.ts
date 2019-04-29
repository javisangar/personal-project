import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.services';

@Component({
  selector: 'app-route',
  templateUrl: './route.component.html',
  styleUrls: ['./route.component.scss']
})
export class RouteComponent implements OnInit {
  routes = [{
    id: Date.now(),
    title: 'Javier Sánchez',
    image: '../../../../assets/images/map.jpg',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry, dummy text of the printing and typesetting industry, dummy text of the printing and typesetting industry.'
  }];

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
