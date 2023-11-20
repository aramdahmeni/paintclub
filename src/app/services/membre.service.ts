import { Injectable } from '@angular/core';
import { Membre } from '../classes/membre';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


const URL='http://localhost:3000/membres';
@Injectable({
  providedIn: 'root'
})
export class MembreService {
  constructor(private http:HttpClient ) { }

  getmembre():Observable<Membre[]>{
    return this.http.get<Membre[]>(URL);
  }
  getmembrebyusername(membreuser: string): Observable<Membre> {
    const url = `${URL}?username_mb=${membreuser}`;
    return this.http.get<Membre>(url);
  }
  

  addmembre(m:Membre):Observable<Membre>{
    return this.http.post<Membre>(URL,m);
  }
}
