import { Component, OnInit } from '@angular/core';
import {NavService} from 'src/app/service/nav.service';
import {Food} from 'src/app/models/food';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  total! : number;
  constructor(private nav:NavService) 
  {
    this.food = Array();
    this.total = 0;
   }
  food! : Food[];
  ngOnInit() {
   this.all();
   this.getMontantTotal();
  }
  all()
  {
    this.nav.food.forEach(f => this.food.push(f));
    this.food.forEach(f => console.log(f));
  }
  getMontantTotal()
  {
    this.food.forEach(f => this.total += f.getMontant());
  }
}
