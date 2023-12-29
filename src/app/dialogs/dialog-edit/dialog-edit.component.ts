import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductResponseModel } from 'src/app/shared/models/productResponseModel';

@Component({
  selector: 'app-dialog-edit',
  templateUrl: './dialog-edit.component.html',
  styleUrls: ['./dialog-edit.component.css']
})
export class DialogEditComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: ProductResponseModel) { }

  ngOnInit(): void {
  }

}
