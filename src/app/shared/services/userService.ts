import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AuthUserModel } from "../models/authUserModel";
import { EndpointModel } from "../models/endpointModel";

@Injectable({
    providedIn: 'root',
  })
export class UserService{
constructor(private http:HttpClient,private endpoint:EndpointModel){}

postUserRegister(user:AuthUserModel):Observable<any>{
    return this.http.post(this.endpoint.registerRoute,user);
}
postUserLogin(user:AuthUserModel):Observable<any>{
    return this.http.post(this.endpoint.loginRoute,user);
}
}