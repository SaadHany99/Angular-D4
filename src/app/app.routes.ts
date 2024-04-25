import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { ProductsComponent } from './Components/products/products.component';
import { ProductInfoComponent } from './Components/products/product-info/product-info.component';
import { ProductFormComponent } from './Components/products/product-form/product-form.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'products',component:ProductsComponent},
    {path:'products/:id',component:ProductInfoComponent},
    {path:'products/:id/edit',component:ProductFormComponent},
    {path:'**',component:NotFoundComponent},
];
