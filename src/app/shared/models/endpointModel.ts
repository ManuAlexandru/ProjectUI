import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root',
  })
export class EndpointModel{
  public port="8081"
public  createBookRoute="http://localhost:"+this.port+"/api/Exam/CreateBook";
public  getTheBookRoute="http://localhost:"+this.port+"/api/Exam/SearchBook";
public  getAllBooksRoute="http://localhost:"+this.port+"/api/Exam/GetAllBooks";
public  getWordsFromUserRoute="http://localhost:"+this.port+"/api/Exam/GetWordsFromUser";
}