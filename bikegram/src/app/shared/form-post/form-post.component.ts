import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

import { PostService } from 'src/app/services/posts.services';

@Component({
  selector: 'app-form-post',
  templateUrl: './form-post.component.html',
  styleUrls: ['./form-post.component.scss']
})
export class FormPostComponent implements OnInit {
  myForm: FormGroup;
  posts: Array<any>;

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.myForm = new FormGroup({
      'text': new FormControl('', [
        Validators.required
      ])
    });

  }
  

  getPosts() {
    this.postService.getPosts().then(posts => {
      this.posts = posts
    })


    // this.posts = this.postService.getPosts();
  }
/*

  createPost() {
    const post = {
      id: Date.now(),
      title: '{{user?.name}}',
      subtitle: '{{user?.location}}',
      image: '../../../../assets/images/ducati.jpg',
      text: 'asfafdafdafda'
    }
    this.postService.addPost(post)
    this.getPosts()
  }

*/
}
