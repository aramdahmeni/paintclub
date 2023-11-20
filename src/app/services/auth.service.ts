import { Injectable } from '@angular/core';
import { MembreService } from './membre.service';
import { Membre } from '../classes/membre';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  

  constructor(private membreservice:MembreService ,private router:Router) { }
  private authenticated=false;

  public login(user:string, pwd:string){
  
    
  }


 
  
  public logout(){
    this.authenticated=false;
  }
  public isauthenticated(){
    return this.authenticated
  }
}

