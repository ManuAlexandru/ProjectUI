import { Component, OnInit } from '@angular/core';
import { FilterTextModel } from '../shared/models/FilterBook';
import { WordModel } from '../shared/models/WordModel';
import { BookService } from '../shared/services/bookService';

@Component({
  selector: 'app-all-words',
  templateUrl: './all-words.component.html',
  styleUrls: ['./all-words.component.css']
})
export class AllWordsComponent implements OnInit {
  
 words:WordModel[]=[];
  constructor(private _service: BookService) { }

  ngOnInit(): void {
this._service.getAllWords().subscribe((response)=>{
  this.words=response;
})
  }

}
