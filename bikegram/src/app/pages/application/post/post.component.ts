import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { PostService } from '../../../services/posts.services';
import { Router, ActivatedRoute } from "@angular/router";
import { PostsModel } from '../../../models/posts.model';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  postModel: PostsModel;
  myForm: FormGroup;
  showError = false;
/*
  cards = [{
    title: 'Jose Luis',
    subtitle: '',
    image: '../../../../assets/images/ducati.jpg',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
  }]
  */
  constructor(private fb: FormBuilder,
    private postService: PostService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

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

}
