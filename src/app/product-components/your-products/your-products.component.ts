import { Component, OnInit } from '@angular/core';
import { ProductResponseModel } from 'src/app/shared/models/productResponseModel';
import { AuthUser } from 'src/app/shared/services/authService';
import { ProductService } from 'src/app/shared/services/productService';

@Component({
  selector: 'app-your-products',
  templateUrl: './your-products.component.html',
  styleUrls: ['./your-products.component.css'],
})
export class YourProductsComponent implements OnInit {
  lstProducts: ProductResponseModel[];
  constructor(
    private productService: ProductService,
    private authService: AuthUser
  ) {}

  ngOnInit(): void {
    this.productService
      .getRetreiveAllOfUserProducts(this.authService.getId())
      .subscribe((data) => {
        this.lstProducts = data;
        console.log(data);
      });
  }
  createDate(milisecods:number){
    return new Date(milisecods).toDateString();
      }
}
