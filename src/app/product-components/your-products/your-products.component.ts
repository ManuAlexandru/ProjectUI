import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogDeleteComponent } from 'src/app/dialogs/dialog-delete/dialog-delete.component';
import { DialogEditComponent } from 'src/app/dialogs/dialog-edit/dialog-edit.component';
import { ProductResponseModel } from 'src/app/shared/models/productResponseModel';
import { AuthUser } from 'src/app/shared/services/authService';
import { NotificationServiceProvider } from 'src/app/shared/services/notificationService';
import { ProductService } from 'src/app/shared/services/productService';

@Component({
  selector: 'app-your-products',
  templateUrl: './your-products.component.html',
  styleUrls: ['./your-products.component.css'],
})
export class YourProductsComponent implements OnInit {
  lstProducts: ProductResponseModel[];
  updateProduct:ProductResponseModel;
  constructor(
    private productService: ProductService,
    private authService: AuthUser,
    private dialog:MatDialog,
    private notificationService: NotificationServiceProvider
  ) {}

  ngOnInit(): void {
    this.productService
      .getRetreiveAllOfUserProducts(this.authService.getId())
      .subscribe((data) => {
        this.lstProducts = data;
        console.log(data);
      });
  }

  editUser(id:number){
    this.productService.getProduct(id).subscribe((data) => {
      this.openUserDialog(data);
  });
  }
  openUserDialog(product: ProductResponseModel): void {
    let dialogRef = this.dialog.open(DialogEditComponent, {
      data: product,
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.updateProduct = result;
      console.log(result);
      if (result) {
        this.productService.updateProduct(this.updateProduct).subscribe((data) => {
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

    

      openDeleteDialog(userId: number) {
        let dialogRef = this.dialog.open(DialogDeleteComponent, {
          data: userId,
        });
        dialogRef.afterClosed().subscribe((result) => {
          if (result) {
            this.productService.postDeleteProduct(result).subscribe((data) => {
              if(data.statusCode==200)
              this.notificationService.onSucces(data.message);
              else
              this.notificationService.onFailed(data.message);
              this.ngOnInit();
            });
          }
        });
      }

      deleteUser(id: number) {
        this.openDeleteDialog(id);
      }
}
