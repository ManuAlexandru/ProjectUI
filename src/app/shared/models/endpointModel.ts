import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root',
  })
export class EndpointModel{
public  registerRoute="http://localhost:8080/api/Auth/Register";
public  loginRoute="http://localhost:8080/api/Auth/Login";
}