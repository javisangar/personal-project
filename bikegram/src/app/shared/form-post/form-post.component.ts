import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { PostService } from 'src/app/services/posts.services';
import { Router, ActivatedRoute } from "@angular/router";
import { PostsModel } from '../../models/posts.model';

@Component({
  selector: 'app-form-post',
  templateUrl: './form-post.component.html',
  styleUrls: ['./form-post.component.scss']
})
export class FormPostComponent implements OnInit {
  myForm: FormGroup;
  posts: Array<any>;
  postModel: PostsModel;
  showError = false;
  post: any = {};
  id;

  constructor(private fb: FormBuilder,
    private postService: PostService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    
    this.myForm = new FormGroup({
      'text': new FormControl('', [
        Validators.required
      ]), 'image': new FormControl('', [
        Validators.required
      ])

    });
    this.activatedRoute.params.subscribe(res => {
      this.id = res.id;
      this.postService.getPost(res.id).then((post) => {
       // this.myForm.text = post.text
       this.post = post;

      })
    })
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

  createPost() {
    if (this.myForm.valid) {
      this.postService.addPost(this.myForm.value).then(
        response => {
          this.showError = false;
          this.router.navigate(['home']);
        },
        err => {
          this.showError = true;
        }
      );
    }
  }

  editPost(){
    
    if (this.myForm.valid) {
      let val = this.myForm.value;
      val._id = this.post._id;
      this.postService.edit(val).then(
        response => {
          this.showError = false;
          this.router.navigate(['home']);
        },
        err => {
          this.showError = true;
        }
      );
    }
  }


}
