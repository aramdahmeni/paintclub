import { Component, OnInit } from '@angular/core';
import { Atelier } from 'src/app/classes/atelier';
import { AtelierService } from 'src/app/services/atelier.service';

@Component({
  selector: 'app-atelier',
  templateUrl: './atelier.component.html',
  styleUrls: ['./atelier.component.css']
})
export class AtelierComponent implements OnInit {
  lesateliers:Atelier[]=[];
  constructor(private atelierservice:AtelierService){}
  ngOnInit(): void {
    this.atelierservice.getatelier().subscribe(
      data=>(this.lesateliers=data)
      
    )}
    // public showdetails:boolean=false;
    // details(){
    //   this.showdetails=!this.showdetails;
      
    //   }
      
    details(){
      
    }
    }
