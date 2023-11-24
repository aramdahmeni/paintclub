import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  membres:Membre[]=[];
  
  signinform!:FormGroup
  
  constructor(private router:Router/*, public authservice:AuthService,*/,private fb:FormBuilder, private membreservice:MembreService){}
  ngOnInit(): void {
    this.lespec = Object.values(specialite).map(String);

    
   this.signinform=this.fb.group({

      name:['',[Validators.required,Validators.pattern('[A-Z][a-z ]+')]],
      numtel:['',[Validators.required,Validators.pattern('[0-9]{8}')]],
      specialite:[specialite.TI],
      username_mb:[''],
      password_mb:[''],
      confirm_mb:['']
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
          let i:number=0;
    this.membreservice.getmembre().subscribe(data => {
      this.membres = data;
      while(i<this.membres.length && this.membres[i].username_mb != this.signinform.get('username_mb')?.value){
        i++;
      }
      if(i!=this.membres.length){
        alert("this username exists already");
        this.router.navigate(['/login']);
      }
    })
          const values=this.signinform.value;
          this.membreservice.addmembre(values).subscribe(
            data =>console.log(data)
          )
          this.router.navigate(['/login']);
        }
      }
    public get name(){
      return this.signinform.get('name');

    }
    public get numtel(){
      return this.signinform.get('numtel');

    }
    public get specialite(){
      return this.signinform.get('specialite');

    }
    public get username_mb(){
      return this.signinform.get('username_mb');

    }
    public get password_mb(){
      return this.signinform.get('password_mb');

    }
    public isvalidatedname(){
      return this.signinform.get('name')?.errors?.['required'] && this.signinform.get('name')?.touched;

    }
    isvalidatednamepattern(){
      return this.signinform.get('name')?.errors?.['pattern'] && this.signinform.get('name')?.dirty;
    }
    public isvalidatednum(){
      return this.signinform.get('numtel')?.errors?.['required'] && this.signinform.get('numtel')?.touched;

    }
    isvalidatednumpattern(){
      return this.signinform.get('numtel')?.errors?.['pattern'] && this.signinform.get('numtel')?.dirty;
    }
    
    
  }
