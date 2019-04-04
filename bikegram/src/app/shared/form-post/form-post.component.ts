import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

import { PostService } from 'src/app/services/posts.services';

@Component({
  selector: 'app-form-post',
  templateUrl: './form-post.component.html',
  styleUrls: ['./form-post.component.scss']
})
export class FormPostComponent implements OnInit {
  postFormOpen = false;
  posts: Array<any>;

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.getPosts();

  }

  setPostFormStatus(open) {
    this.postFormOpen = open
  }

  getPosts() {
    // this.postService.getPosts().then(posts => {
    //  this.posts = posts
    //})

    this.posts = this.postService.getPosts();
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

}
