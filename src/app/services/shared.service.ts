import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const URLsimple='http://localhost:5000/ateliers';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  constructor(public http:HttpClient){}
  
  private username: string = '';
  private selected: string = '';

  setUserName(username: string) {
    this.username = username;
  }

  getUserName(): string {
    return this.username;
  }

  setSelected(nom: string) {
    this.selected = nom;
  }

  getSelected(): string {
    return this.selected;
  }
}