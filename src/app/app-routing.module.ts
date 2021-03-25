import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SearchrComponent} from './views/searchr/searchr.component';
import {HomeComponent} from './views/home/home.component';
import { FourOhFourComponent } from './pages/four-oh-four/four-oh-four.component';

const routes: Routes = [
  { path: 'search',  component:FourOhFourComponent },
  { path: 'home',  component:HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
