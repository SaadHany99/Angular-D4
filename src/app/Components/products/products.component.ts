import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../Service/product.service';
import { IProduct } from '../../Models/i-product';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProductAPIService } from '../../Service/product-api.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  products:IProduct[]=[];
constructor(public product:ProductAPIService){

}
  ngOnInit(): void {
    this.product.getAllProducts().subscribe({
      next:(data)=>{this.products=data;},
      error:()=>{},
      complete:()=>{},
    });
  }
  deleteProduct(productid:number){
    this.product.deleteProduct(productid).subscribe({
      next:()=>{this.products=this.products.filter(product=>product.id!=productid);},
      error:()=>{},
      complete:()=>{},
    });
  }
}
