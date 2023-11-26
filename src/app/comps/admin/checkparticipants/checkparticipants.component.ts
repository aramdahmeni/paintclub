import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-checkparticipants',
  templateUrl: './checkparticipants.component.html',
  styleUrls: ['./checkparticipants.component.css']
})
export class CheckparticipantsComponent implements OnInit{
  username!:string;
  workshopid!:number;
constructor(public sharedservice:SharedService){} 
  ngOnInit(): void {
    this.username=this.sharedservice.getusername();
    this.workshopid=this.sharedservice.getworkshopid();
    console.log(this.username, " ", this.workshopid);
  }

}
