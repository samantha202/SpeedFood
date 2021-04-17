import { Injectable,ViewChild,EventEmitter, Output } from '@angular/core';
import { GooglePlaceModule, GooglePlaceDirective } from "ngx-google-places-autocomplete";


var adresse1 : string;
var results1 : any;
var ville1 : string;
var results: any;
var code_postal1 : number;
var rue1 : string;
var numero1 : number;
var departement1 : string;
var latitude1 : string;
var longitude1 : string;
var email1 : string;
var infowindow : any;
var infowindowContent : any;
var marker: any;

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
  geocoding(adr:string) {
                    
    this.geocoder = new google.maps.Geocoder();
    this.geocoder.geocode( { 'address': adr}, function(results:any) {
    ville1 = results[0].address_components[2].long_name;
    code_postal1 = results[0].address_components[6].long_name;
    rue1 = results[0].address_components[1].long_name;
    numero1 = results[0].address_components[0].long_name;
    departement1 = results[0].address_components[4].long_name;
    latitude1 = results[0].geometry.location.lat();
    longitude1 = results[0].geometry.location.lng();
  }
 )
  this.SearchRestaurant(adr)
}
SearchRestaurant(adr:string) {
  const self = this;
  infowindow = new google.maps.InfoWindow();
  infowindowContent = document.getElementById('infowindow-content');
  infowindow.setContent(infowindowContent);
  //var adr = this.adresse;  
  var map=this.map;
  this.geocoder.geocode( { 'address': adr}, function(results) {
    map.setZoom(18);
    map.setCenter(results[0].geometry.location);
      
  // Création du marqueur du lieu (épingle)
      marker = new google.maps.Marker({
      map: map,
      position: results[0].geometry.location,
      draggable: true,
      title: "move to restaurant site"
  });
  const contentString =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h3><a href="http://localhost:4200/website">Website</a></h3>'+'</div>'+'</div>'

  marker.bindTo('bounds',map);
  marker.setVisible(true);
  const infowindow = new google.maps.InfoWindow({
    content: contentString,
  });
  marker.addListener('click', function() {
    infowindow.open(map, marker);
    //infowindowContent.children['place-address'].textContent = "www.html.com"
  })
});

}
}
