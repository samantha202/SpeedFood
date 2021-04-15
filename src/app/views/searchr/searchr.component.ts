import { Component, OnInit } from '@angular/core';
import { GooglePlaceModule, GooglePlaceDirective } from "ngx-google-places-autocomplete";
import { MapsService } from 'src/app/service/maps.service';

@Component({
  selector: 'app-searchr',
  templateUrl: './searchr.component.html',
  styleUrls: ['./searchr.component.css']
})
export class SearchrComponent  implements OnInit {

  constructor(private map : MapsService) 
  {}
   ngOnInit() {
    this.map.initMap();
  }
  doMaps()
    {
      const adres = (<HTMLInputElement>document.getElementById('adresses')).value;
      this.map.geocoding(adres);
    }
}
