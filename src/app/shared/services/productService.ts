import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { EndpointModel } from "../models/endpointModel";
import { ProductModel } from "../models/productModel";
import { AuthUser } from "./authService";


@Injectable({
    providedIn: 'root',
  })

export class ProductService{

    constructor(private http:HttpClient,private endpoint:EndpointModel,private authService:AuthUser){}

  postAddProduct(product:ProductModel):Observable<any>{
    var tokenHeader = new HttpHeaders({
      "Authorization": 'Bearer ' + localStorage.getItem('token'),
      });
    return this.http.post(this.endpoint.addProductRoute,product,{headers:tokenHeader});
  }
getRetreiveAllProducts():Observable<any>{
  return this.http.get(this.endpoint.getAllProducts);
}
getRetreiveAllOfUserProducts(id:number):Observable<any>{
  var tokenHeader = new HttpHeaders({
    "Authorization": 'Bearer ' + localStorage.getItem('token'),
    });
  return this.http.get(this.endpoint.getYourProducts+"/"+id,{headers:tokenHeader});
}
getDeleteProduct(id:number):Observable<any>{
  var tokenHeader = new HttpHeaders({
    "Authorization": 'Bearer ' + localStorage.getItem('token'),
    });
  return this.http.get(this.endpoint.deleteProduct+"/"+id,{headers:tokenHeader});
}
}