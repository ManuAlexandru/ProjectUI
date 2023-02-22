import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { BookModel } from '../shared/models/createBookModel';
import { BookService } from '../shared/services/bookService';
import { CommonModule } from '@angular/common';
import { FilterTextModel } from '../shared/models/FilterBook';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  word:string="";
  myForm: FormGroup;
  books:BookModel[]=[];
  constructor(private fb: FormBuilder, private _service: BookService) {}

  ngOnInit(): void {
    this._service.getAllBooks().subscribe((response)=>{
      console.log(response);
      this.books=response;
    })
  }

  getBookByName(){
   console.log(this.word); 
   var filterModel:FilterTextModel=new FilterTextModel;
   filterModel.text=this.word;
   this._service.getBook(filterModel).subscribe((response)=>{
    console.log(response);
    this.books=response;
   })
  }
}
