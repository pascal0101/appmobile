import { Component } from '@angular/core';
import { Geolocation} from '@ionic-native/geolocation/ngx';
import { Map,tileLayer,marker,polyline} from "leaflet";
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  map: Map;
  marker: any;
  latLong = [];

  constructor(private geolocation: Geolocation) {

    console.log("ok");
     
  }

        ionViewDidEnter(){
            this.showMap();   
           }
      showMap(){
            this.map = new Map('myMap').setView([6.212069, 1.1875334],10);
          
            tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(this.map);
      }
      getPositions(){
        this.geolocation.getCurrentPosition({
          enableHighAccuracy:true
        }).then((res)=>{
          return this.latLong=[
            res.coords.latitude,
            res.coords.longitude
          ]
        }).then((latlng)=>{
          this.showMarker(latlng);
        });
      }

      showMarker(latLong){
        this.marker = marker(latLong);
        this.marker.addTo(this.map).bindPopup('je suis ici');
        this.map.setView(latLong);
      
      }


}
