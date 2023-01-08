import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductResponseModel } from 'src/app/shared/models/productResponseModel';

@Component({
  selector: 'app-dialog-bid',
  templateUrl: './dialog-bid.component.html',
  styleUrls: ['./dialog-bid.component.css']
})
export class DialogBidComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: ProductResponseModel) { }

  ngOnInit(): void {
  }

}
