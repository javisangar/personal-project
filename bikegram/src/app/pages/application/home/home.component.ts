import { Component, OnInit } from '@angular/core';

import { PostService } from 'src/app/services/posts.services';
import { RouteService } from 'src/app/services/routes.services';
import { SaleService } from 'src/app/services/sales.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  postFormOpen = false;
  routeFormOpen = false;
  saleFormOpen = false;
  posts: Array<any>;
  routes: Array<any>;
  sales: Array<any>;
  lat: number;
  lng: number;
  origin: any
  destination: any

  /* 
  sales = [{
     id: Date.now(),
     userImg: '',
     title: 'Javier Sánchez',
     subtitle: 'Madrid',
     brand: 'Honda CBR 600',
     kilometers: '12.500 km',
     image: '../../../../assets/images/honda1.jpg',
     price: '4.200€',
     text: 'Vendo Honda CBR 600 del 2009 con pocos kilómetros, revisión recién hecha'
   }];
   */

  constructor(private postService: PostService, private routeService: RouteService, private saleService: SaleService) { }

  ngOnInit() {
    this.getPosts();
    this.getRoutes();
    this.getSales();
    this.setMapConfig()
  }

  setMapConfig() {
    this.lat = 40.407901;
    this.lng = -3.706990;
    this.origin = {
      lat: 38.96795115401593,
      lng: - 1.900634765625,
    }
    this.destination = {
      lat: 41.27780646738183,
      lng: - 4.21875
    }
    
    this.origin = 'Albacete'
    this.destination = 'Ayna'
  }

  setPostFormStatus(open) {
    this.postFormOpen = open
  }
  setRouterFormStatus(open) {
    this.routeFormOpen = open
  }
  setSaleFormStatus(open) {
    this.saleFormOpen = open
  }
  getPosts() {
    // this.postService.getPosts().then(posts => {
    //  this.posts = posts
    //})

    this.posts = this.postService.getPosts();
  }

  getRoutes() {
    this.routes = this.routeService.getRoutes();
  }


  getSales() {
    this.sales = this.saleService.getSales();
  }

  createPost() {
    const post = {
      id: Date.now(),
      title: 'Javier Sánchez',
      subtitle: 'Madrid',
      image: '../../../../assets/images/ducati.jpg',
      text: 'asfafdafdafda'
    }
    this.postService.addPost(post)
    this.getPosts()
    this.setPostFormStatus(false)
  }

  removePost(event, post) {
    this.postService.removePost(post.id)
    this.getPosts()
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

  removeRoute(event, route) {
    this.routeService.removeRoute(route.id)
    this.getRoutes()
  }

  createSale() {
    const sale = {
      id: Date.now(),
      userImg: '',
      title: 'Javier Sánchez',
      subtitle: 'Madrid',
      brand: 'Honda CBR 600',
      kilometers: '12.500 km',
      image: '../../../../assets/images/honda1.jpg',
      price: '4.200€',
      text: 'Vendo Honda CBR 600 del 2009 con pocos kilómetros, revisión recién hecha'
    }
    this.saleService.addSale(sale)
    this.getSales()
    this.setSaleFormStatus(false)
  }

  removeSale(event, sale) {
    this.saleService.removeSale(sale.id)
    this.getSales()
  }

}
