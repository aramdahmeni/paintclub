import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-listeateliers',
  templateUrl: './listeateliers.component.html',
  styleUrls: ['./listeateliers.component.css']
})
export class ListeateliersComponent {
 constructor(private authservice:AuthService, private router:Router){}
 logout(){
  this.authservice.logout();
  this.router.navigate(["/login"]);
}


}
