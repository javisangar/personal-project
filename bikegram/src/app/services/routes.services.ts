import { Injectable } from "@angular/core";
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { RoutesModel } from '../models/routes.model';

const API = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class RouteService {
  routes: Array<any>;


  constructor(private httpClient: HttpClient) {
  }
  getRoutes() {
    return this.httpClient.get(`${API}/api/v1/routes`).toPromise().then((routes: Array<RoutesModel>) => routes);
  }
  getRoute(id) {
    return this.httpClient.get(`${API}/api/v1/routes/${id}`).toPromise().then((routes:RoutesModel) => routes);
  }
  addRoute(route) {
    return this.httpClient.post(`${API}/api/v1/routes`, route).toPromise().then((routes: RoutesModel)=> routes);
  }
   
  remove(id){
    return this.httpClient.delete(`${API}/api/v1/routes/${id}`).toPromise().then((routes: RoutesModel)=> routes);
  }

  edit(route){
    return this.httpClient.put(`${API}/api/v1/routes/${route._id}`, route).toPromise().then((routes: RoutesModel)=> routes);
  }

}

