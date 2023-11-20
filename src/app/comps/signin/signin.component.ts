import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MembreService } from 'src/app/services/membre.service';
import { Router } from '@angular/router';
import { specialite } from 'src/app/categories/specialite';
import { Membre } from 'src/app/classes/membre';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  lespec!:string[];
  lesmembres:Membre[]=[];
  
  signinform!:FormGroup
  
  constructor(private router:Router/*, public authservice:AuthService,*/,private fb:FormBuilder, private membreservice:MembreService){}
  ngOnInit(): void {
    this.lespec = Object.values(specialite).map(String);

    
   this.signinform=this.fb.group({

      name:['name'],
      numtel:['12345678'],
      specialite:[specialite.TI],
      username_mb:['username'],
      password_mb:['password'],
      confirm_mb:['confirm password']
    })
  }
 

  onreset(){
    this.signinform.reset({ user:'username', pwd: 'password' } );
    } 
/*
    onsubmit(){
      const name = this.signinform.get('name')?.value;
  const numtel = this.signinform.get('numtel')?.value;
  const specialite = this.signinform.get('specialite')?.value;
  const username_mb = this.signinform.get('username_mb')?.value;
  const password_mb = this.signinform.get('password_mb')?.value;

  const newMembre: Membre = new Membre(Membre.nextId, name, numtel, specialite, username_mb, password_mb);

      this.membreservice.addmembre(newMembre).subscribe(
        data => {this.success();}
      )}
      success(){
        alert("welcome to our club!");
      }*/


      onSubmit(){
        if(this.signinform.valid){
          const values=this.signinform.value;
          this.membreservice.addmembre(values).subscribe(
            data =>console.log(data)
          )
          this.router.navigate(['/login']);
        }
      }
    
  }