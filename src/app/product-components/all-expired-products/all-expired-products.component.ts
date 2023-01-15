import { Component, OnInit } from '@angular/core';
import { ExpiredProductModel } from 'src/app/shared/models/expiredProductModel';
import { AuthUser } from 'src/app/shared/services/authService';
import { ProductService } from 'src/app/shared/services/productService';

@Component({
  selector: 'app-all-expired-products',
  templateUrl: './all-expired-products.component.html',
  styleUrls: ['./all-expired-products.component.css']
})
export class AllExpiredProductsComponent implements OnInit {
  lstProducts: ExpiredProductModel[];
  constructor(private productService: ProductService,
    public authService: AuthUser) { }

  ngOnInit(): void {
    this.productService.getAllExpiredProducts().subscribe((data)=>{
      this.lstProducts=data;
      console.log(data);
    })
  }

}
