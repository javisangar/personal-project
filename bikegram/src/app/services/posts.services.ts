import { Injectable } from "@angular/core";
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { PostsModel } from '../models/posts.model';

const API = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class PostService {
  posts: Array<any>;


  constructor(private httpClient: HttpClient) {
  }
  getMatches(post) {
    return this.httpClient.get(`${API}/api/v1/posts`).toPromise().then((posts: Array<PostsModel>) => posts);
  }
  addPost(post) {
    return this.httpClient.post(`${API}/api/v1/post`, post).toPromise().then((posts: PostsModel)=> posts);
  }
   
  remove(id){
    return this.httpClient.delete(`${API}/api/v1/post/${id}`).toPromise().then((posts: PostsModel)=> posts);
  }

  edit(post){
    return this.httpClient.put(`${API}/api/v1/posts/${post.id}`, post).toPromise().then((posts: PostsModel)=> posts);
  }

}

