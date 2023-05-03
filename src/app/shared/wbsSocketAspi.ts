import { AppComponent } from "../app.component";
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root',
  })

export class WebSocketAPI {
    webSocketEndPoint: string = 'http://localhost:8081/sba-websocket';
    topic: string = "/topic/greetings";
    stompClient=Stomp.over(this.webSocketEndPoint);
    appComponent: AppComponent;
    constructor(appComponent: AppComponent){
        this.appComponent = appComponent;
    }
 
    subscribeT(topic:string,callback?:any):void{
        const connected:boolean=this.stompClient.connected;
        if(connected){
            this.subscribeToTopic(topic,callback);
            return;
        }
        this.stompClient.connect({},():any=>{
this.subscribeToTopic(topic,callback);
        });
    };
  private subscribeToTopic(topic:string,callback?:any):void{
    this.stompClient.subscribe(topic,()=>{
callback();
    });
  }

}