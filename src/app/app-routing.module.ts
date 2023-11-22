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

const routes: Routes = [
  //membre
  {path:"homepage", title:"homepage", component:HomepageComponent},
  {path:"aboutus", title:"aboutus", component:AboutusComponent},
  {path:"ateliers",title:"ateliers",component:ListeateliersComponent/*,canActivate:[authGuard]*/},
  {path:"workshop", title:"workshop" , component:AtelierComponent},
  { path: "ateliers/selectedatelier/:id", title: "selectedworkshop", component: SelectedatelierComponent },
 
  //login & signin & pwd change
  {path:"login", title:"login", component:LoginComponent},
  {path:"signin",title:"signup", component:SigninComponent},



  //admi
  {path:"dashboard", title:"dashboard", component:DashboardComponent/*,canActivate:[authGuard]*/},
  {path:"", redirectTo:"homepage",pathMatch:'full'},
  {path:"**",title:"error",component:ErrorComponent}
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})  
export class AppRoutingModule { }
