import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/shared/models/productModel';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {
lstProducts:Array<ProductModel>;
  constructor() { }

  ngOnInit(): void {
  }

}
