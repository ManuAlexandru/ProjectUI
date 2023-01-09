import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root',
  })
export class EndpointModel{
  public port="8081"
public  registerRoute="http://localhost:"+this.port+"/api/Home/Auth/Register";
public  loginRoute="http://localhost:"+this.port+"/api/Home/Auth/Login";
public addProductRoute="http://localhost:"+this.port+"/api/Product/CreateProduct";
public getAllProducts="http://localhost:"+this.port+"/api/Home/GetAllProducts";
public getYourProducts="http://localhost:"+this.port+"/api/Product/GetYourProducts";
public deleteProduct="http://localhost:"+this.port+"/api/Product/DeleteProduct";
public getProduct="http://localhost:"+this.port+"/api/Product/GetProduct";
public updateProduct="http://localhost:"+this.port+"/api/Product/UpdateProduct";
public updateProductPrice="http://localhost:"+this.port+"/api/Product/UpdateProductPrice";
}