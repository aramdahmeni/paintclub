import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private username!:string;
  private workshopid!:number;

  setusername(username:string):void{
    this.username=username;
  }
  setworkshopid(workshopid:number):void{
    this.workshopid=workshopid;
  }
  getusername():string{
    return this.username;
  }
  getworkshopid():number{
    return this.workshopid;
  }

}
