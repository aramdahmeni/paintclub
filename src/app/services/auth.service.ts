import { Injectable } from '@angular/core';
import { MembreService } from './membre.service';
import { Membre } from '../classes/membre';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  membres!: Membre[];

  constructor(private membreservice:MembreService ,private router:Router) { }
  private authenticated=false;
public login(user:string, mdp:string){
   let i:number=0;
  this.membreservice.getmembre().subscribe(data => {
    this.membres = data;
    if(user=="admin" && mdp=="paintclub"){
      this.authenticated=true;
      this.router.navigate(["/dashboard"]);
      alert("welcome admin");

    }
    else{
    while(i<this.membres.length && this.membres[i].username_mb != user){
      i++;
    }
    if(i==this.membres.length){
      alert("user doesnt exist");
    }
    else if(this.membres[i].username_mb == user && this.membres[i].password_mb == mdp){
      this.authenticated=true;
        this.router.navigate(["/ateliers"]);
      }
      else{
        alert("invalid password");
      }
    }})


  }
  
  public logout(){
    this.authenticated=false;
    
  }
  public isauthenticated(){
    return this.authenticated
  }
}

