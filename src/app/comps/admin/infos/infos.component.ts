import { Component } from '@angular/core';
import { Atelier } from 'src/app/classes/atelier';
import { Membre } from 'src/app/classes/membre';
import { AtelierService } from 'src/app/services/atelier.service';
import { MembreService } from 'src/app/services/membre.service';

@Component({
  selector: 'app-infos',
  templateUrl: './infos.component.html',
  styleUrls: ['./infos.component.css']
})
export class InfosComponent {
  atelier!:Atelier[];
  nbatelier:number=0;
  
  membre!:Membre[];
  nbmembre:number=0;
  
    constructor( public atelierservice:AtelierService, public membreservice:MembreService){}
    ngOnInit(): void {
      //count des atelier
      this.atelierservice.getatelier().subscribe(
        (data:Atelier[])=>{
          this.atelier=data;
          this.nbatelier=this.atelier.length;
        }
      )
      //count members
      this.membreservice.getmembre().subscribe(
        (data:Membre[])=>{
          this.membre=data;
          this.nbmembre=this.membre.length;
        }
      )
    }
    
    
      
}
