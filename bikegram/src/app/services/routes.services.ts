import { Injectable } from "@angular/core";
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { RoutesModel } from '../models/routes.model';

const API = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class PostService {
  routes: Array<any>;


  constructor(private httpClient: HttpClient) {
  }
  getMatches(route) {
    return this.httpClient.get(`${API}/api/v1/route`).toPromise().then((routes: Array<RoutesModel>) => routes);
  }
  addPost(route) {
    return this.httpClient.post(`${API}/api/v1/routes`, route).toPromise().then((routes: RoutesModel)=> routes);
  }
   
  remove(id){
    return this.httpClient.delete(`${API}/api/v1/routes/${id}`).toPromise().then((routes: RoutesModel)=> routes);
  }

  edit(route){
    return this.httpClient.put(`${API}/api/v1/routes/${route.id}`, route).toPromise().then((routes: RoutesModel)=> routes);
  }

}

