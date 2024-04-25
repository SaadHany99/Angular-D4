import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IProduct } from '../../../Models/i-product';
import { ProductList } from '../../../Models/ProductList';
import { ProductService } from '../../../Service/product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css'
})
export class ProductFormComponent implements OnInit {
name: string = '';
price: number = 0;
quantity:number=0;
productID:any;
Product:any;
constructor(public productService:ProductService,public router:Router,public activatedroute:ActivatedRoute){

}
  ngOnInit(): void {
this.productID=this.activatedroute.snapshot.params['id'];
if(this.productID!=0){
this.Product=this.productService.getProductById(this.productID);
this.name=this.Product?.name;
this.price=this.Product?.price;
this.quantity=this.Product?.quantity;
}
  
}
ProductAction(){
  if(this.productID==0){
  let id=ProductList.length+1;
  let AddedProduct:IProduct={
    id,
    name:this.name,
    price:this.price,
    quantity:this.quantity
  }
  // console.log(this.name,this.price,this.quantity);
  // console.log(AddedProduct);
  this.productService.addNewProduct(AddedProduct);
  this.router.navigate(['/products']);
}else{
  //edit here
  debugger
  let id=this.productID=this.activatedroute.snapshot.params['id'];
  let editedProduct:IProduct={
    id,
    name:this.name,
    price:this.price,
    quantity:this.quantity
  };
  this.productService.editProduct(id,editedProduct);

  // console.log(this.Product);
  
  this.router.navigate(['/products']);
  debugger
}
  
}
}
