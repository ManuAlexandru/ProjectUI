import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { BookService } from '../shared/services/bookService';

@Component({
  selector: 'app-all-books',
  templateUrl: './all-books.component.html',
  styleUrls: ['./all-books.component.css'],
})
export class AllBooksComponent implements OnInit {
  myForm: FormGroup;
  constructor(private fb: FormBuilder, private _service: BookService) {}

  ngOnInit(): void {}
}
