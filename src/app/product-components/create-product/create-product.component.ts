import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductModel } from 'src/app/shared/models/productModel';
import * as fs from 'fs';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  constructor( private fb: FormBuilder) { }
 directory="assets/img";
  selectedFile: File;
  formData: ProductModel = new ProductModel();
  myForm: FormGroup;
  hide: boolean = true;
  ngOnInit(): void {
    this.myForm = this.fb.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      price: ['', [Validators.required,Validators.pattern("^[0-9]*$")]],
      file:[""]
    });
  }

  get getName() {
    return this.myForm.get('name');
  }
  get getDescription() {
    return this.myForm.get('description');
  }
  get getPrice(){
    return this.myForm.get('price');
  }
  onFileSelected(event:any) {
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile);
  }

  onSubmit() {
    this.formData=this.myForm.value;
    const path=this.directory+"/"+this.selectedFile.name;
    this.saveImage(this.selectedFile);
console.log(this.formData);
  }

  saveImage(file:File){
    fs.mkdir(this.directory, (error) => {
      if (error) {
        console.error(error);
      } else {
        fs.writeFile(`${this.directory}/${file.name}`, file.name, (error) => {
          if (error) {
            console.error(error);
          } else {
            console.log('Image saved successfully');
          }
        });
      }
    });
  }
}
