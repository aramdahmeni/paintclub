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

  loginform!:FormGroup
  constructor(private router:Router, public authservice:AuthService,private fb:FormBuilder,private membreservice:MembreService){}
  ngOnInit(): void {
    this.loginform=this.fb.group({
      user:['username'],
      pwd:['password']
    })
  }
  login(user:string, mdp:string){
    this.authservice.login(user,mdp);
  }

  onreset(){
    this.loginform.reset({ user:'username', pwd: 'password' } );
    } 
}


