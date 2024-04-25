import { Injectable } from '@angular/core';
import { IProduct } from '../Models/i-product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductAPIService {
  baseUrl:string='http://localhost:2024/products';
  constructor(private http:HttpClient) {

   }
  getAllProducts():Observable<IProduct[]>{
    return this.http.get<IProduct[]>(this.baseUrl);
  }
  getProductById(productId:number){
    return this.http.get(`${this.baseUrl}/${productId}`);
  }
  addNewProduct(product:any){
    return this.http.post(this.baseUrl,product);
  }
  editProduct(productId:number,product:any){
    return this.http.put(`${this.baseUrl}/${productId}`,product);
  }
  deleteProduct(productId:number){
    return this.http.delete(`${this.baseUrl}/${productId}`);
  }

}
