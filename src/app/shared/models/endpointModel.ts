import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root',
  })
export class EndpointModel{
public  registerRoute="http://localhost:8080/api/Home/Auth/Register";
public  loginRoute="http://localhost:8080/api/Home/Auth/Login";
public addProductRoute="http://localhost:8080/api/Product/CreateProduct";
public getAllProducts="http://localhost:8080/api/Home/GetAllProducts";
public getYourProducts="http://localhost:8080/api/Product/GetYourProducts";
public deleteProduct="http://localhost:8080/api/Product/DeleteProduct"
}