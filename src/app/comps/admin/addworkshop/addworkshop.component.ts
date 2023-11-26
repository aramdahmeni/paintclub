import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Atelier } from 'src/app/classes/atelier';
import { AtelierService } from 'src/app/services/atelier.service';


@Component({
  selector: 'app-addworkshop',
  templateUrl: './addworkshop.component.html',
  styleUrls: ['./addworkshop.component.css']
})
export class AddworkshopComponent {
  addform!:FormGroup
constructor(public atelierservice:AtelierService, public fb:FormBuilder){}
  ngOnInit(): void {
    this.addform=this.fb.group({
      nom:["",Validators.required],
      description:["",Validators.required],
      date:["",Validators.required],
      lieu:["",Validators.required],
      image:["",Validators.required],
    })
  }

  onsubmit(){
    if(this.addform.valid){
      const formvalues=this.addform.value;
      const ateliervalue=new Atelier(
        Atelier.nextId++,
        formvalues.nom,
        formvalues.description,
        formvalues.date,
        formvalues.image,
        formvalues.lieu,
        Atelier.notdone
      );

    this.atelierservice.addatelier(ateliervalue).subscribe(
      data =>console.log(data)    
    )  
    }

}
}
