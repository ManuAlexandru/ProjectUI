import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductModel } from 'src/app/shared/models/productModel';
import { AuthUser } from 'src/app/shared/services/authService';
import { ProductService } from 'src/app/shared/services/productService';


@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  constructor( private fb: FormBuilder,private productService:ProductService,private authService:AuthUser) { }
 directory="assets/img";
 exampleHeader;
  selectedFile: File;
  theEndDate:number;
  formData: ProductModel = new ProductModel();
  myForm: FormGroup;
  hide: boolean = true;
  ngOnInit(): void {
    this.myForm = this.fb.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
      price: ['', [Validators.required,Validators.pattern("^[0-9]*$")]],
      file:[""]
    });
  }

  get getTitle() {
    return this.myForm.get('title');
  }
  get getDescription() {
    return this.myForm.get('description');
  }
  get getPrice(){
    return this.myForm.get('price');
  }
 

  onSubmit() {
    this.formData=this.myForm.value;
 this.formData.endDate=this.theEndDate;
 console.log(this.formData.endDate);
  this.formData.createdDate=Date.now();
  this.formData.userId=this.authService.getId();
console.log(this.formData);
this.productService.postAddProduct(this.formData).subscribe((result)=>{
  console.log(result);
});
  }

  onFileSelected(event:any) {
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile);
  }

  updateDOB(dateObject) {
    console.log(dateObject.value);
    this.theEndDate=new Date(dateObject.value).getTime();
  }
  
}
