import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Atelier } from '../classes/atelier';
import { Observable } from 'rxjs';

const URLsimple='http://localhost:3000/ateliers';


@Injectable({
  providedIn: 'root'
})
export class AtelierService {

  constructor(private http:HttpClient ) { }

  getatelier():Observable<Atelier[]>{
    return this.http.get<Atelier[]>(URLsimple);
  }
  getatelierbyid(idatelier: number): Observable<Atelier> {
    const url =`${URLsimple}/${idatelier}`;
    return this.http.get<Atelier>(url);
  }
  

  /*cote admin*/
  addatelier(a:Atelier):Observable<Atelier>{
    return this.http.post<Atelier>(URLsimple,a);
  }

  updateatelier(a:Atelier,id:number):Observable<Atelier>{
    return this.http.put<Atelier>(URLsimple+"/"+id,a);
  }
  deleteatelier(a:Atelier){
    return this.http.delete(URLsimple+"/"+a.id);
  }

}
