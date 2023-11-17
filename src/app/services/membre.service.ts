import { Injectable } from '@angular/core';
import { Membre } from '../classes/membre';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


const URL='http://localhost:3000/membre';
@Injectable({
  providedIn: 'root'
})
export class MembreService {

  constructor(private http:HttpClient ) { }

  getmembre():Observable<Membre[]>{
    return this.http.get<Membre[]>(URL);
  }

  addmembre(m:Membre):Observable<Membre>{
    return this.http.post<Membre>(URL,m);
  }
}
