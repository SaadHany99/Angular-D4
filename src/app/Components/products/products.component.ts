import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../Service/product.service';
import { IProduct } from '../../Models/i-product';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  products:IProduct[]=[];
constructor(public product:ProductService){

}
  ngOnInit(): void {
    this.products=this.product.getAllProducts();
  }
  deleteProduct(productid:number){
    this.products=this.product.deleteProduct(productid);
  }
}
