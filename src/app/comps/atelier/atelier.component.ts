
      import { Component, OnInit } from '@angular/core';
import { Atelier } from 'src/app/classes/atelier';
import { AtelierService } from 'src/app/services/atelier.service';

@Component({
  selector: 'app-atelier',
  templateUrl: './atelier.component.html',
  styleUrls: ['./atelier.component.css']
})
export class AtelierComponent {

    public lesateliers: Atelier[]=[];

    constructor(private atelierservice:AtelierService){
     this.atelierservice.getatelier().subscribe(
        (atelier:Atelier[])=>{
          this.lesateliers=atelier;
        }
      )
      this.atelierservice.getatelier().subscribe((atelier: Atelier[]) => {
        this.lesateliers = atelier;
    
        for (let i = 0; i < this.lesateliers.length - 1; i++) {
          for (let j = 0; j < this.lesateliers.length - 1 - i; j++) {
            if (new Date(this.lesateliers[j].date) < new Date(this.lesateliers[j + 1].date)) {
              [this.lesateliers[j], this.lesateliers[j + 1]] = [this.lesateliers[j + 1], this.lesateliers[j]];
            }
          }
        }
      });
    }
    

    outcome(dateat:string){
      let mydate= new Date();
      let thedate=new Date(dateat);
      if(thedate<mydate){
        
        return 'red';
      }
      else{return 'green';}
     
    }


}

    