import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './comps/login/login.component';
import { HomepageComponent } from './comps/homepage/homepage.component';
import { AtelierComponent } from './comps/atelier/atelier.component';
import { DashboardComponent } from './comps/dashboard/dashboard.component';
import { authGuard } from './auth.guard';
import { AboutusComponent } from './comps/aboutus/aboutus.component';
import { SigninComponent } from './comps/signin/signin.component';

const routes: Routes = [
  //membre
  {path:"homepage", title:"homepage", component:HomepageComponent},
  {path:"aboutus", title:"aboutus", component:AboutusComponent},
  {path:"ateliers", title:"ateliers" , component:AtelierComponent/*,canActivate: [authGuard]*/ },
  //login & signin
  {path:"login", title:"login", component:LoginComponent},
  {path:"signin",title:"signup", component:SigninComponent},
  //admi
  {path:"dashboard", title:"dashboard", component:DashboardComponent,canActivate:[authGuard]},
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
