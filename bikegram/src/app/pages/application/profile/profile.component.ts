import { Component, OnInit } from '@angular/core';
import { PostService } from '../../../services/posts.services';
import { RouteService } from '../../../services/routes.services';
import { SaleService } from '../../../services/sales.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  lat: number;
  lng: number;
  origin: any;
  destination: any;
  posts: any;
  routes: any;
  sales: any;
  text: string;
  image: string;

  
  constructor(private postService: PostService, private routeService: RouteService, private saleService: SaleService,
    private _router: Router) { }

  ngOnInit() {
    this.getPosts();
    this.getRoutes();
    this.getSales();
    this.setMapConfig()
  }

  getPosts() {
    this.postService.getPosts().then(posts => {
      this.posts = posts
    });
  }

  getRoutes() {
    this.routeService.getRoutes().then(routes => {
      this.routes = routes
    });
  }

  getSales() {
    this.saleService.getSales().then(sales => {
      this.sales = sales
    });
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

    this.origin = 'Madrid'
    this.destination = 'Segovia'
  }

  deleteSale(event, sale) {
    let message = window.confirm('Attention! You are going to delete this sale permanently');
    if (message === true) {
      this.saleService.remove(sale).then(sales => {
        this.getSales();
      });
    } else {
      return;
    }
  }
  editSale(id) {

    this._router.navigate(['home/edit-sale/', id]);

  }

  deleteRoute(event, route) {
    let message = window.confirm('Attention! You are going to delete this route permanently');
    if (message === true) {
      this.routeService.remove(route).then(routes => {
        this.getRoutes();
      });
    } else {
      return;
    }
  }
  editRoute(id) {

    this._router.navigate(['home/edit-route/', id]);
  }

  deletePost(event, post) {
    let message = window.confirm('Attention! You are going to delete this post permanently');
    if (message === true) {
      this.postService.remove(post).then(post => {
        this.getPosts();

      });

    } else {
      return;
    }
  }

  editPost(id) {

    this._router.navigate(['home/edit-post/', id]);
  }

}
