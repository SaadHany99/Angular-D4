import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../../Service/product.service';
import { IProduct } from '../../../Models/i-product';
import { ProductAPIService } from '../../../Service/product-api.service';

@Component({
  selector: 'app-product-info',
  standalone: true,
  imports: [],
  templateUrl: './product-info.component.html',
  styleUrl: './product-info.component.css'
})
export class ProductInfoComponent implements OnInit {
  Id:any;
  Product?:any;
constructor(public activatedroute:ActivatedRoute,public productService:ProductAPIService,public router:Router){
  

}
  ngOnInit(): void {
    this.Id=this.activatedroute.snapshot.params['id'];
    this.productService.getProductById(this.Id).subscribe({
      next:(data)=>{
        this.Product=data;
        // console.log(this.Product);
      },
      error:(err)=>{
        console.log(err);
      },
      complete:()=>{
        console.log("complete");

      }
    });
    // console.log(this.Id);
   
  }
  backtoproducts(){
    this.router.navigate(['/products']);
  }
}
