import { Injectable } from '@angular/core';
import { IProduct } from '../Models/i-product';
import { ProductList } from '../Models/ProductList';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
products:IProduct[]=[];
  constructor() { 
    this.products=ProductList;
  }
  getAllProducts(): IProduct[] {
    return this.products;
  }

  getProductById(productId: number): IProduct | undefined {
    return this.products.find((product)=>product.id==productId);
  }

  addNewProduct(product: IProduct) {
    this.products.push(product);

    return this.products;
  }

  deleteProduct(productId: number) {
    this.products = this.products.filter((product) => product.id != productId);
    return this.products;
  }
  editProduct(productId: number, product: IProduct) {
    debugger
    const index=this.products.findIndex(p=>p.id==productId);
    if (index !== -1) {
      // Update the product properties
      this.products[index] = { ...this.products[index], ...product };
    } else {
      // Product not found, you can handle this case as per your requirement
      console.error(`Product with id ${productId} not found.`);
    }
    return this.products;
    debugger
  }
}
