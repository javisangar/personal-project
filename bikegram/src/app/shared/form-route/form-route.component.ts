import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { RouteService } from 'src/app/services/routes.services';
import { Router, ActivatedRoute } from "@angular/router";
import { AuthService } from '../../services/auth.services';
import { RoutesModel } from '../../models/routes.model';

@Component({
  selector: 'app-route',
  templateUrl: 'form-route.component.html',
  styleUrls: ['form-route.component.scss']
})
export class FormRouteComponent implements OnInit {
  myForm: FormGroup;
  routes: Array<any>;
  routesModel: RoutesModel;
  showError = false;
  route: any = {};
  id;

  user: any;
  lat: number;
  lng: number;




  constructor(private fb: FormBuilder,
    private routeService: RouteService,
    private router: Router,
    private activatedRoute: ActivatedRoute, private authService: AuthService) { }


  ngOnInit() {
    
    this.user = this.authService.user;
    this.getUserLocation();

   this.myForm = new FormGroup({
    'start': new FormControl('', [
      Validators.required
    ]),
    'end': new FormControl('', [
      Validators.required
    ]),
    'description': new FormControl('', [
      Validators.required
    ])
  });

  this.activatedRoute.params.subscribe(res => {
    this.id = res.id;
    this.routeService.getRoute(res.id).then((route) => {
     // this.myForm.text = post.text
     this.route = route;
    })
  })
  }

  getUserLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
      })
    }
  }

  createRoute() {
    if (this.myForm.valid) {
      this.routeService.addRoute(this.myForm.value).then(
        response => {
          this.showError = false;
          this.router.navigate(['home']);
        },
        err => {
          this.showError = true;
        }
      );
    }
  }

  editRoute(){
    
    if (this.myForm.valid) {
      let val = this.myForm.value;
      val._id = this.route._id;
      this.routeService.edit(val).then(
        response => {
          this.showError = false;
          this.router.navigate(['home']);
        },
        err => {
          this.showError = true;
        }
      );
    }
  }

}