import { Component } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Map, tileLayer, marker, polyline, control, Routing } from "leaflet";
import { AngularFireAuth } from '@angular/fire/auth';
import { ToastController } from '@ionic/angular';
import { present } from '@ionic/core/dist/types/utils/overlays';
//import { routing} from "leaflet-routing-machine";
//import {locate, locatecontrol} from 'leaflet.locatecontrol';
//import { Routing, routing} from 'leaflet-routing-machine'; 
//import * as L from 'leaflet';
import 'leaflet-routing-machine';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  map: Map;
  marker: any;
  latLong = [];
  propertyList = [];


  constructor(private geolocation: Geolocation, private afAuth: AngularFireAuth, private toast: ToastController) {

    console.log("ok");

  }


  ionViewWillEnter() {
    this.showMap();
  }
  showMap() {
    //this.map = new Map('myMap').setView([6.212069, 1.1875334], 10);
    this.map = new Map('myMap').setView([42.35663, -71.1109], 16);
    tileLayer('https://{s}.tile.osm.org/{z}/{x}/{y}.png').addTo(this.map);
    fetch('./assets/data.json').then(res => res.json())
    .then(json => {
      this.propertyList = json.properties;
      this.leafletMap();
    });
    /*this.map.polygon([
      [51.509, -0.08],
      [51.503, -0.06],
      [51.51, -0.047]
    ]).addTo(this.map);
    Routing.control({
      waypoints: [
        this.map.latLong = [6.212069, 1.1875334],
        this.map.latLong = [6.130419, 1.215829]
      ],
      routeWhileDragging: true,
    }).addTo(this.map);*/
  }
  leafletMap() {
    for (const property of this.propertyList) {
      marker([property.lat, property.long]).addTo(this.map)
        .bindPopup(property.city)
        .openPopup();
    }
  }
  getPositions() {
    this.geolocation.getCurrentPosition({
      enableHighAccuracy: true
    }).then((res) => {
      return this.latLong = [
        res.coords.latitude,
        res.coords.longitude
      ]
    }).then((latlng) => {
      this.showMarker(latlng);
    });
  }

  showMarker(latLong) {
    //var custumIcon = this.marker.icon({}); custum icon
    this.marker = marker(latLong);
    this.marker.addTo(this.map).bindPopup('Ma position');
    this.map.setView(latLong);

  }


      ionViewDidEnter() {
        this.afAuth.authState.subscribe(data => {
          if (data && data.email && data.uid) {
            this.toast.create({
              message: 'Bienvenue,${data.email}',
              duration: 3000
            });
          } else {
            this.toast.create({
              message: 'Vous n etes pas connecté',
              duration: 3000
            });
          }
        })
      }
}