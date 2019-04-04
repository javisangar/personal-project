import { Component, OnInit } from '@angular/core';
import { RouteService } from 'src/app/services/routes.services';


@Component({
  selector: 'app-form-route',
  templateUrl: './form-route.component.html',
  styleUrls: ['./form-route.component.scss']
})
export class FormRouteComponent implements OnInit {
  routeFormOpen = false;
  routes: Array<any>;

  constructor(private routeService: RouteService) { }

  ngOnInit() {
    this.getRoutes();

  }

  setRouterFormStatus(open) {
    this.routeFormOpen = open
  }

  getRoutes() {

    this.routes = this.routeService.getRoutes();
  }

  createRoute() {
    const route = {
      id: Date.now(),
      title: 'Javier Sánchez',
      subtitle: 'Madrid',
      image: '../../../../assets/images/map.jpg',
      text: 'zzzzzzzzzz'
    }
    this.routeService.addRoute(route)
    this.getRoutes()
    this.setRouterFormStatus(false)
  }

}
