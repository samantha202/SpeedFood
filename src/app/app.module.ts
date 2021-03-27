import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { FooterComponent } from './pages/footer/footer.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { PanelComponent } from './pages/panel/panel.component';
import { FourOhFourComponent } from './pages/four-oh-four/four-oh-four.component';
import { SearchrComponent } from './views/searchr/searchr.component';
import { HomeComponent } from './views/home/home.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    PanelComponent,
    FourOhFourComponent,
    SearchrComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    GooglePlaceModule,
    AgmCoreModule.forRoot({
     apiKey: 'AIzaSyD2cPvVFGpXFhzNgEYoqrrGgZ-MW8ZDWQo'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
