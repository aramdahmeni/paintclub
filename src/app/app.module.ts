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
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ErrorComponent,
    HomepageComponent,
    MenuComponent,
    AboutusComponent,
    AtelierComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
