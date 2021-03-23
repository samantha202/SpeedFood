import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { FooterComponent } from './pages/footer/footer.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { PanelComponent } from './pages/panel/panel.component';
import { FourOhFourComponent } from './pages/four-oh-four/four-oh-four.component';
import { LoginComponent } from './views/login/login.component';
import { SearchrComponent } from './views/searchr/searchr.component';
import { HomeComponent } from './views/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    PanelComponent,
    FourOhFourComponent,
    LoginComponent,
    SearchrComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
