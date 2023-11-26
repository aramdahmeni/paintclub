import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Membre } from 'src/app/classes/membre';
import { AuthService } from 'src/app/services/auth.service';
import { MembreService } from 'src/app/services/membre.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginform!:FormGroup
  constructor(public router:Router, public authservice:AuthService,private fb:FormBuilder,public sharedservice:SharedService){}
  ngOnInit(): void {
    this.loginform=this.fb.group({
      user:['username',Validators.required],
      pwd:['password',Validators.required]
    })
    
  }

  public get pwdmb(){
    return this.loginform.get('pwd');
  }
  pwdoblig(){
    return this.pwdmb?.errors?.['required'] && this.pwdmb?.touched;
  
  }
  public get usermb(){
    return this.loginform.get('user');
  }
  useroblig(){
    return this.usermb?.errors?.['required'] && this.usermb?.touched;
  }




  login(){
    const user=this.loginform.get('user')?.value;
    const pwd=this.loginform.get('pwd')?.value;
    this.authservice.login(user,pwd);
    this.sharedservice.setUserName(user);

  }

  onreset(){
    this.loginform.reset({ user:'username', pwd: 'password' } );
    } 
}


