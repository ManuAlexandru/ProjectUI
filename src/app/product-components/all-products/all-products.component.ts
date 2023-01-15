import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NgxPubSubService } from '@pscoped/ngx-pub-sub';
import { DialogBidComponent } from 'src/app/dialogs/dialog-bid/dialog-bid.component';
import { ProductModel } from 'src/app/shared/models/productModel';
import { ProductResponseModel } from 'src/app/shared/models/productResponseModel';
import { AuthUser } from 'src/app/shared/services/authService';
import { NotificationServiceProvider } from 'src/app/shared/services/notificationService';
import { ProductService } from 'src/app/shared/services/productService';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css'],
})
export class AllProductsComponent implements OnInit {
  lstProducts: ProductResponseModel[];
  elemBought:ProductResponseModel;
  updateProduct: ProductResponseModel;
  filterText: string = '';
  constructor(
    private productService: ProductService,
    private notificationService: NotificationServiceProvider,
    public dialog: MatDialog,
    public authService:AuthUser,
    private pubsub: NgxPubSubService,

  ) {}

  ngOnInit(): void {
      this.refreshPage();  
      this.pubsub.subscribe('bid', (value: any) => {
        this.refreshPage();
      }); 
  }

  refreshPage() {
    this.productService.getRetreiveAllProducts().subscribe((data) => {
      console.log("data is ");
      console.log(data);
      this.lstProducts = data;
      console.log("ViewData is ");
      console.log(this.lstProducts);
    });
  }
  bidProduct(id: number) {
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
     this.updateProduct.buyerId=this.authService.getId();
      console.log(this.updateProduct);
      if (result) {
        this.productService
          .updateProductPrice(this.updateProduct)
          .subscribe((data) => {
            if (data.statusCode == 200)
              this.notificationService.onSucces(data.message);
            else this.notificationService.onFailed(data.message);
          });
      }
    });
  }
  buyProduct(id:number){
    for(var i=0;i<this.lstProducts.length;i++){
      if(this.lstProducts[i].id==id){
        this.elemBought=this.lstProducts[i];
      }
    }
    this.elemBought.buyerId=this.authService.getId();
    this.productService.postBuyNow(this.elemBought).subscribe((response)=>{
console.log(response);
    })
  }
  

  createDate(milisecods: number) {
    return new Date(milisecods).toDateString();
  }
}
