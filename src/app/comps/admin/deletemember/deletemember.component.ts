import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Membre } from 'src/app/classes/membre';
import { MembreService } from 'src/app/services/membre.service';

@Component({
  selector: 'app-deletemember',
  templateUrl: './deletemember.component.html',
  styleUrls: ['./deletemember.component.css']
})
export class DeletememberComponent implements OnInit {
  deleteform!:FormGroup;
  member!:Membre[]
constructor(public membreservice:MembreService, public fb:FormBuilder){}
 
    ngOnInit(): void {

    this.deleteform=this.fb.nonNullable.group({
      user:[,Validators.required]
    })

    this.membreservice.getmembre().subscribe((data)=>{
      this.member=data;
    })
  }

    
    public get user(){
      return this.deleteform.get('user');
    }
    selectoblig(){
      return this.user?.errors?.['required'] && this.user?.touched;
    }

    delete()
{    const selectedvalue = this.deleteform.get('user')?.value;
 
    if (selectedvalue) {
      let i: number = 0;
      while (i < this.member.length) {
        if (this.member[i].nom === selectedvalue) {
          this.membreservice.suppmembre(this.member[i].id).subscribe(
            () => {
              alert('Member deleted successfully');
            }
          );
          break;
        } else {
          i++;
        }
      }
      
      if (i === this.member.length) {
        console.log('Member not found');
      }
    }
  }
}
