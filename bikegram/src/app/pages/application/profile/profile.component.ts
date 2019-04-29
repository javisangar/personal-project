import { Component, OnInit } from '@angular/core';
import { PostService } from '../../../services/posts.services';
import { RouteService } from '../../../services/routes.services';
import { SaleService } from '../../../services/sales.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
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

}
