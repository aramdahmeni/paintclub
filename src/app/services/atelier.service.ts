import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Atelier } from '../classes/atelier';
import { Observable } from 'rxjs';

const URL='http://localhost:3000/atelier';
@Injectable({
  providedIn: 'root'
})
export class AtelierService {

  constructor(private http:HttpClient ) { }

  getatelier():Observable<Atelier[]>{
    return this.http.get<Atelier[]>(URL);
  }


  /*cote admin*/
  addatelier(a:Atelier):Observable<Atelier>{
    return this.http.post<Atelier>(URL,a);
  }

  updateatelier(a:Atelier,id:number):Observable<Atelier>{
    return this.http.put<Atelier>(URL+"/"+id,a);
  }
  deleteatelier(a:Atelier){
    return this.http.delete(URL+"/"+a.id);
  }

}
