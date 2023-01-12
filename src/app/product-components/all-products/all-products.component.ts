import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogBidComponent } from 'src/app/dialogs/dialog-bid/dialog-bid.component';
import { ProductModel } from 'src/app/shared/models/productModel';
import { ProductResponseModel } from 'src/app/shared/models/productResponseModel';
import { NotificationServiceProvider } from 'src/app/shared/services/notificationService';
import { ProductService } from 'src/app/shared/services/productService';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {

lstProducts:ProductResponseModel[];
updateProduct:ProductResponseModel;
filterText:string="";
  constructor(private productService:ProductService
    , private notificationService: NotificationServiceProvider
    ,public dialog: MatDialog,) { }

  ngOnInit(): void {
  this.productService.getRetreiveAllProducts().subscribe((data)=>{
this.lstProducts=data;


  });
  }

  bidProduct(id:number){
    this.productService.getProduct(id).subscribe((data) => {
      this.openBidDialog(data);
    });
  }

  openBidDialog(product: ProductResponseModel): void {
    let dialogRef = this.dialog.open(DialogBidComponent, {
      data: product,
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.updateProduct = result;
      console.log(result);
      if (result) {
        this.productService.updateProductPrice(this.updateProduct).subscribe((data) => {
          if(data.statusCode==200)
          this.notificationService.onSucces(data.message);
          else
          this.notificationService.onFailed(data.message);
          console.log(data.message);
          this.ngOnInit();
        });
      }
    });
  }

  createDate(milisecods:number){
return new Date(milisecods).toDateString();
  }
}
