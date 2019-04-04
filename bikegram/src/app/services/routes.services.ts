import {
    Injectable
  } from "@angular/core";
  
  @Injectable({
    providedIn: 'root'
  })
  export class RouteService {
    posts: Array<any>;

    constructor() {
        this.routes = [{
            id: Date.now(),
            title: 'Javier Sánchez',
            subtitle: 'Madrid',
            image: '../../../../assets/images/ducati.jpg',
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
          }]
    }
    getPosts() {
        return this.posts;
    }
    addPost(post) {
        this.posts.push(post)
    }
  }
  