import { Injectable } from '@angular/core';
import { Membre } from '../classes/membre';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


const URL='http://localhost:3500/membres';
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
  getmembrebyid(id: number): Observable<Membre> {
    const url = `${URL}?id=${id}`;
    return this.http.get<Membre>(url);
  }
  changermdp(id: number, nvmdp:string ){
    return this.http.post(URL,{id, nvmdp});
  }

      addmembre(m:Membre):Observable<Membre>{
        return this.http.post<Membre>(URL,m);
      }
  suppmembre(id:number):Observable<any>{   
    return this.http.delete<void>(`${URL}/${id}`);
    }

    
  

}
