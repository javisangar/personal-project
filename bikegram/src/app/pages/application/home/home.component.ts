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

  getRoutes(){
    
    this.routes = this.routeService.getRoutes();
  }

  getSales(){
    
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
}
