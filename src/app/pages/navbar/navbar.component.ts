import { Component, OnInit } from '@angular/core';
import { NgbPaginationNumber } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
         count1: number;
  constructor() {  
   this.count1 = 1;}

  ngOnInit(): void {
    
  }
  call(){}
  public static add(){
 
  }

}
