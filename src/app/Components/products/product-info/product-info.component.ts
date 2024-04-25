import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../../Service/product.service';
import { IProduct } from '../../../Models/i-product';

@Component({
  selector: 'app-product-info',
  standalone: true,
  imports: [],
  templateUrl: './product-info.component.html',
  styleUrl: './product-info.component.css'
})
export class ProductInfoComponent implements OnInit {
  Id:any;
  Product?:IProduct;
constructor(public activatedroute:ActivatedRoute,public productService:ProductService,public router:Router){
  

}
  ngOnInit(): void {
    this.Id=this.activatedroute.snapshot.params['id'];
    // console.log(this.Id);
   this.Product= this.productService.getProductById(this.Id);
   console.log(this.Product);
   
  }
  backtoproducts(){
    this.router.navigate(['/products']);
  }
}
