import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Membre } from 'src/app/classes/membre';
import { AuthService } from 'src/app/services/auth.service';
import { MembreService } from 'src/app/services/membre.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  membres!: Membre[];
  loginform!:FormGroup
  constructor(private router:Router, public authservice:AuthService,private fb:FormBuilder,private membreservice:MembreService){}
  ngOnInit(): void {
    this.loginform=this.fb.group({
      user:['username'],
      pwd:['password']
    })
  }
  login(user:string, mdp:string){
    let i:number=0;
    this.membreservice.getmembre().subscribe(data => {
      this.membres = data;
      while(i<this.membres.length && this.membres[i].username_mb != user){
        i++;
      }
      if(i==this.membres.length){
        console.log("this username doesnt exist");
      }
      else if(this.membres[i].username_mb == user && this.membres[i].password_mb == mdp){
        if(this.membres[i].username_mb=="admin" && this.membres[i].password_mb=="paintclub"){
          this.router.navigate(["/dashboard",this.membres[i].id]);
        }else{
          this.router.navigate(["/ateliers"]);
        }

      }
      else{
        alert("password is wrong");
      }
    })



    /*
    return this.authservice.login(user,mdp);*/

  } 
  

  onreset(){
    this.loginform.reset({ user:'username', pwd: 'password' } );
    } 
}


