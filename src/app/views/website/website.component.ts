import { Component, OnInit } from '@angular/core';
import {Food} from 'src/app/models/food'
import {NavbarComponent} from 'src/app/pages/navbar/navbar.component';
import {NavService} from 'src/app/service/nav.service';

@Component({
  selector: 'app-website',
  templateUrl: './website.component.html',
  styleUrls: ['./website.component.css']
})
export class WebsiteComponent implements OnInit {
  food!: Food[];
  f!: Food;
  n!: NavbarComponent;
  count:number;
  constructor(private nav:NavService) { 
    this.food = new Array();
    this.count = 0;
  }

  ngOnInit() {
  }
  addList(nom:string,categorie:string,montant:number)
  {
    this.nav.add(nom,categorie,montant);
    this.count++;
  }
}
