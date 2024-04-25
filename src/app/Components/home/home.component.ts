import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { SliderComponent } from '../slider/slider.component';
import { AllProductsComponent } from './all-products/all-products.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SliderComponent,AllProductsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
