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
  getPosts() {
    return this.httpClient.get(`${API}/api/v1/posts`).toPromise().then((posts: Array<PostsModel>) => posts);
  }
  getPost(id) {
    return this.httpClient.get(`${API}/api/v1/posts/${id}`).toPromise().then((post:PostsModel) => post);
  }
  addPost(post) {
    return this.httpClient.post(`${API}/api/v1/posts`, post).toPromise().then((posts: PostsModel)=> posts);
  }
   
  remove(id){
    return this.httpClient.delete(`${API}/api/v1/posts/${id}`).toPromise().then((posts: PostsModel)=> posts);
  }

  edit(post){
    return this.httpClient.put(`${API}/api/v1/posts/${post._id}`, post).toPromise().then((posts: PostsModel)=> posts);
  }

}

