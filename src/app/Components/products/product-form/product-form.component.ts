import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../../Models/i-product';
import { ProductList } from '../../../Models/ProductList';
import { ProductService } from '../../../Service/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductAPIService } from '../../../Service/product-api.service';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css'
})
export class ProductFormComponent implements OnInit {
productForm=new FormGroup({
  name:new FormControl('',[Validators.required,Validators.minLength(4)]),
  price:new FormControl(null,[Validators.required,Validators.min(50)]),
  quantity:new FormControl(null,Validators.required),
});
productID:any;
Product:any;
constructor(public productService:ProductAPIService,public router:Router,public activatedroute:ActivatedRoute){

}
  ngOnInit(): void {
// this.productID=this.activatedroute.snapshot.params['id'];
this.activatedroute.params.subscribe({
  next:(data)=>{
    this.productID=data['id'];
    this.getName.setValue('');
    this.getPrice.setValue(null);
    this.getQuantity.setValue(null);
  },
});
if(this.productID!=0){
this.productService.getProductById(this.productID).subscribe({
  next:(data)=>{
    this.Product=data;
    this.getName.setValue(this.Product.name);
    this.getPrice.setValue(this.Product.price);
    this.getQuantity.setValue(this.Product.quantity);
  },
});
}
  
}
get getName(){
  return this.productForm.controls['name'];
}
get getPrice(){
  return this.productForm.controls['price'];
}
get getQuantity(){
  return this.productForm.controls['quantity'];
}
ProductAction(){
  if(this.productForm.status=='VALID'){
    if(this.productID==0){
      this.productService.addNewProduct(this.productForm.value).subscribe({
        next:()=>{
          this.router.navigate(['/products']);
        },
      });
    }else
       {
        // console.log(this.productForm.value);
        this.productService.editProduct(this.productID,this.productForm.value).subscribe({
          next:()=>{
            this.router.navigate(['/products']);
          },
        });
       }
  }else
  {
    console.log("Form Is INVALID");
    
  }
  
  //   if(this.productID==0){
  //   // this.router.navigate(['/products']);
  // }else{
  //   //edit here
  //   debugger
  //   // let id=this.productID=this.activatedroute.snapshot.params['id'];
  //   // console.log(this.Product);
    
  //   // this.router.navigate(['/products']);
  //   debugger
  // }
  
}
}
