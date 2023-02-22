import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { BookModel } from '../shared/models/createBookModel';
import { BookService } from '../shared/services/bookService';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  myForm: FormGroup;
  book:BookModel;
  constructor(private fb: FormBuilder, private _service: BookService) {}

  ngOnInit(): void {
    this.myForm = this.fb.group({
      name: ['', ],
      author: ['',],
      year: ['',],
    });
  }

  submitBook(){
this.book=this.myForm.value;
console.log(this.book);
this._service.postAddProduct(this.book).subscribe((response)=>{
  console.log(response);
})
  }


}
