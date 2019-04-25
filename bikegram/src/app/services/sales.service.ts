import { Injectable } from "@angular/core";
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { SalesModel } from '../models/sales.model';

const API = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class SaleService {
  sales: Array<any>;


  constructor(private httpClient: HttpClient) {
  }
  getSales() {
    return this.httpClient.get(`${API}/api/v1/sales`).toPromise().then((sales: Array<SalesModel>) => sales);
  }
  addSale(sale) {
    return this.httpClient.post(`${API}/api/v1/sales`, sale).toPromise().then((sales: SalesModel)=> sales);
  }
   
  remove(id){
    return this.httpClient.delete(`${API}/api/v1/sales/${id}`).toPromise().then((sales: SalesModel)=> sales);
  }

  edit(post){
    return this.httpClient.put(`${API}/api/v1/posts/${post.id}`, post).toPromise().then((sales: SalesModel)=> sales);
  }

}

