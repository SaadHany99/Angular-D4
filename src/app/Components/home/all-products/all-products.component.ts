import { Component } from '@angular/core';
import { IProduct } from '../../../Models/i-product';
import { CommonModule } from '@angular/common';
import { ProductList } from '../../../Models/ProductList';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-all-products',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './all-products.component.html',
  styleUrl: './all-products.component.css'
})
export class AllProductsComponent {
productList:IProduct[]=[];
constructor(){
  this.productList=ProductList;
}
}
