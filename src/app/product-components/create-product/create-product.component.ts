import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  NotificationsService,
  SimpleNotificationsComponent,
} from 'angular2-notifications';
import { ProductModel } from 'src/app/shared/models/productModel';
import { AuthUser } from 'src/app/shared/services/authService';
import { ProductService } from 'src/app/shared/services/productService';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css'],
})
export class CreateProductComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private _notificationService: NotificationsService,
    private authService: AuthUser
  ) {}
  selectedFile: File;
  theEndDate: number;
  formData: ProductModel = new ProductModel();
  myForm: FormGroup;
  hide: boolean = true;
  ngOnInit(): void {
    this.myForm = this.fb.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
      price: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      endDate: ['', [Validators.required]],
    });
  }

  get getTitle() {
    return this.myForm.get('title');
  }
  get getDescription() {
    return this.myForm.get('description');
  }
  get getPrice() {
    return this.myForm.get('price');
  }

  get getStartDate() {
    return this.myForm.get('startDate');
  }

  get getEndDate() {
    return this.myForm.get('endDate');
  }

  onSubmit() {
    this.formData = this.myForm.value;
    // Assuming an average of 30 days in a month
    const millisecondsInDay = 24 * 60 * 60 * 1000; // 1 day = 24 hours * 60 minutes * 60 seconds * 1000 milliseconds
    const daysInMonth = 30; // Assuming an average of 30 days per month

    const endDate = new Date(this.formData.endDate);

    this.formData.endDate = endDate.getTime();
    console.log(this.formData.endDate);
    this.formData.createdDate = Date.now();
    this.formData.userId = this.authService.getId();
    this.formData.buyerId = 0;
    console.log(this.formData);

    this.productService.postAddProduct(this.formData).subscribe(
      (res) => {
        this._notificationService.success('Product added successfully');
        this.myForm.reset();
      },
      (err) => {
        this._notificationService.error('Error adding product');
      }
    );
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile);
  }

  updateDOB(dateObject) {
    console.log(dateObject.value);
    this.theEndDate = new Date(dateObject.value).getTime();
  }
}
