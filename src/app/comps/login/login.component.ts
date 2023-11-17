import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router:Router, public authservice:AuthService){}
  login(user:string, mdp:string){
    if(this.authservice.login(user,mdp))
      this.router.navigate(['/dashboard']);
    else
      alert("login invalid");
  } 
}
