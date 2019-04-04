import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/posts.services';

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

  routes = [{
    id: Date.now(),
    title: 'Javier Sánchez',
    subtitle: 'Madrid',
    image: '../../../../assets/images/map.jpg',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
  }];
  
  sales = [{
    id: Date.now(),
    userImg:'',
    title: 'Javier Sánchez',
    subtitle: 'Madrid',
    brand: 'Honda CBR 600',
    kilometers: '12.500 km',
    image: '../../../../assets/images/honda1.jpg',
    price: '4.200€',
    text: 'Vendo Honda CBR 600 del 2009 con pocos kilómetros, revisión recién hecha'
  }];


  constructor(private postService: PostService) { }

  ngOnInit() {
    this.getPosts()
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

    this.posts = this.postService.getPosts()
  }
  createPost() {
    const post = {
      id: Date.now(),
      title: 'Javi',
      subtitle: 'Madrid',
      image: '../../../../assets/images/ducati.jpg',
      text: 'asfafdafdafda'
    }
    this.postService.addPost(post)
    this.getPosts()
    this.setPostFormStatus(false)
  }
}
