import { Injectable,ViewChild,EventEmitter, Output } from '@angular/core';
import { GooglePlaceModule, GooglePlaceDirective } from "ngx-google-places-autocomplete";


@Injectable({
  providedIn: 'root'
})
export class MapsService {
@ViewChild('addresstext', {read:true, static:false}) addresstext: GooglePlaceDirective;
geocoder : any;
google: any ;
map: any;
  constructor() { }

  initMap(){
    var latlng = new google.maps.LatLng(46.52863469527167,2.43896484375);
    var mapOptions = {
      zoom      : 6,
      center    : latlng,
      mapTypeId : google.maps.MapTypeId.ROADMAP,
    }
    const getElement = document.getElementById('mapp-canvas');
    if(getElement){
      this.map = new google.maps.Map(getElement, mapOptions);
    } 
  }
}
