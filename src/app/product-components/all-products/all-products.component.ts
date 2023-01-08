import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/shared/models/productModel';
import { ProductResponseModel } from 'src/app/shared/models/productResponseModel';
import { ProductService } from 'src/app/shared/services/productService';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {

lstProducts:ProductResponseModel[];

  constructor(private productService:ProductService) { }

  ngOnInit(): void {
  this.productService.getRetreiveAllProducts().subscribe((data)=>{
this.lstProducts=data;
console.log(this.lstProducts);
  });
  }

  createDate(milisecods:number){
return new Date(milisecods).toDateString();
  }
}
