import { Component, OnInit } from '@angular/core';
import { PostService } from '../../../services/posts.services';
import { RouteService } from '../../../services/routes.services';
import { SaleService } from '../../../services/sales.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  lat: number;
  lng: number;
  origin: any;
  destination: any;
  posts: any;
  routes: any;
  sales: any;


  

  constructor(private postService: PostService,  private routeService: RouteService, private saleService: SaleService) { }

  ngOnInit() {
    this.getPosts();
    this.getRoutes();
    this.getSales();
    
   
  }

  getPosts() {
    this.postService.getPosts().then(posts=>{
      this.posts = posts
    });
  }

  getRoutes() {
    this.routeService.getRoutes().then(routes=>{
      this.routes = routes
    });
  }

  getSales() {
    this.saleService.getSales().then(sales=>{
      this.sales = sales
    });
  }

  removeSales(e, id){
    this.saleService.remove(id).then(sales=>{
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
    
    this.origin = 'Albacete'
    this.destination = 'Ayna'
  }

}
