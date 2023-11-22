import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './comps/login/login.component';
import { ErrorComponent } from './comps/error/error.component';
import { HomepageComponent } from './comps/homepage/homepage.component';
import { MenuComponent } from './comps/menu/menu.component';
import { AboutusComponent } from './comps/aboutus/aboutus.component';
import { AtelierComponent } from './comps/atelier/atelier.component';
import { DashboardComponent } from './comps/dashboard/dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SigninComponent } from './comps/signin/signin.component';
import { HttpClientModule } from '@angular/common/http';
import { ListeateliersComponent } from './comps/listeateliers/listeateliers.component';
import { SelectedatelierComponent } from './comps/selectedatelier/selectedatelier.component';
import { FooterComponent } from './comps/footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ErrorComponent,
    HomepageComponent,
    MenuComponent,
    AboutusComponent,
    AtelierComponent,
    DashboardComponent,
    SigninComponent,
    ListeateliersComponent,
    SelectedatelierComponent,
    FooterComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
ReactiveFormsModule,
HttpClientModule

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
