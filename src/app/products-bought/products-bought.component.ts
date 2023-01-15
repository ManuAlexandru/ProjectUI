import { Component, OnInit } from '@angular/core';
import { BoughtProductModel } from '../shared/models/boughtProductModel';
import { AuthUser } from '../shared/services/authService';
import { ProductService } from '../shared/services/productService';

@Component({
  selector: 'app-products-bought',
  templateUrl: './products-bought.component.html',
  styleUrls: ['./products-bought.component.css'],
})
export class ProductsBoughtComponent implements OnInit {
  lstProducts: BoughtProductModel[];
  constructor(
    private productService: ProductService,
    public authService: AuthUser
  ) {}

  ngOnInit(): void {
    this.productService
      .getAllBoughtProductsOfUser(this.authService.getId())
      .subscribe((data) => {
        console.log(data);
        this.lstProducts=data;
        console.log(this.lstProducts);
      });
  }
}
