import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './comps/login/login.component';
import { HomepageComponent } from './comps/homepage/homepage.component';
import { AtelierComponent } from './comps/atelier/atelier.component';
import { DashboardComponent } from './comps/dashboard/dashboard.component';
import { authGuard } from './auth.guard';
import { AboutusComponent } from './comps/aboutus/aboutus.component';
import { SigninComponent } from './comps/signin/signin.component';
import { ListeateliersComponent } from './comps/listeateliers/listeateliers.component';
import { SelectedatelierComponent } from './comps/selectedatelier/selectedatelier.component';
import { ErrorComponent } from './comps/error/error.component';
import { DeletememberComponent } from './comps/admin/deletemember/deletemember.component';
import { AddworkshopComponent } from './comps/admin/addworkshop/addworkshop.component';
import { DeleteworkshopComponent } from './comps/admin/deleteworkshop/deleteworkshop.component';
import { InfosComponent } from './comps/admin/infos/infos.component';

const routes: Routes = [
  //membre
  {path:"homepage", title:"homepage", component:HomepageComponent},
  {path:"aboutus", title:"aboutus", component:AboutusComponent},
  {path:"ateliers",title:"ateliers",component:ListeateliersComponent,canActivate:[authGuard]},
  {path:"workshop", title:"workshop" , component:AtelierComponent},
  { path: "ateliers/selectedatelier/:id", title: "selectedworkshop", component: SelectedatelierComponent },

  //login & signin & pwd change
  {path:"login", title:"login", component:LoginComponent},
  {path:"signin",title:"signup", component:SigninComponent},



  //admi
  {path:"dashboard", title:"dashboard", component:DashboardComponent ,canActivate:[authGuard],
children:[
  //workshops
  {path:'info',title:'Informations',component:InfosComponent},
  {path:'addworkshop',title:'Add Workshop',component:AddworkshopComponent},
  {path:'deleteworkshop',title:"Delete Workshop", component:DeleteworkshopComponent},
  //admin
  {path:'deletemembre',title:'Delete Member',component:DeletememberComponent},
  //participants
  {path:"", redirectTo:"info",pathMatch:'full'}
  ],},
  
  {path:"", redirectTo:"homepage",pathMatch:'full'},
  {path:"**",title:"error",component:ErrorComponent}
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})  
export class AppRoutingModule { }
