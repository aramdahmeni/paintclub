import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  private authenticated=false;
  public login(user:string, pwd:string){
    return this.authenticated=(user=="admin" && pwd=="paintclub");
  }
  public logout(){
    this.authenticated=false;
  }
  public isauthenticated(){
    return this.authenticated
  }
}
