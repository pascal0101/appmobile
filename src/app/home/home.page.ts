import { Component } from '@angular/core';
import {Agence} from '../interfaces/agence';
import {AgenceService} from '../services/agence.service';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Map, tileLayer, marker, polyline, control, Routing, circle } from "leaflet";
import { AngularFireAuth } from '@angular/fire/auth';
import { ToastController } from '@ionic/angular';
import { present } from '@ionic/core/dist/types/utils/overlays';
//import { routing} from "leaflet-routing-machine";
//import {locate, locatecontrol} from 'leaflet.locatecontrol';
//import { Routing, routing} from 'leaflet-routing-machine'; 
//import * as L from 'leaflet';
import 'leaflet-routing-machine';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  agences : Agence[];
  map: Map;
  marker: any;
  latLong = [];
  propertyList = [];


  constructor(public menu: MenuController,private agenceService:AgenceService,private geolocation: Geolocation, private afAuth: AngularFireAuth, private toast: ToastController) {

    console.log("ok");
    //this.menu.enable(false, 'leftMenu');
  }

  
  showMap() {
    
    //this.map = new Map('myMap').setView([6.212069, 1.1875334], 10);
    this.map = new Map('myMap').setView([6.176197, 1.214317], 13);
    tileLayer('https://{s}.tile.osm.org/{z}/{x}/{y}.png').addTo(this.map);
    fetch('./assets/data.json').then(res => res.json())
      .then(json => {
        this.propertyList = json.properties;
        this.leafletMap();
      });
    /*circle([6.212069, 1.1875335], {
      color: "red",
      fillColor: "#f03",
      fillOpacity: 0.5,
      radius: 50.0
    }).addTo(this.map);

    /*
    //afficher la trajectoire entre deux points
    Routing.control({
      waypoints: [
        this.map.latLong = [6.212069, 1.1875334],
        this.map.latLong = [6.130419, 1.215829]
      ],
      routeWhileDragging: true,
    }).addTo(this.map);*/
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
    this.marker.addTo(this.map).bindPopup('Votre position');
    //this.map.setView(latLong);

  }
  ngOnInit() {
    this.agenceService.getAgences().subscribe(res => this.agences = res);
    console.log(this.agences);
    //console.log(this.propertyList);
  }
  

  ionViewWillEnter() {
    this.showMap()
     //this.menu.enable(false);
    this.afAuth.authState.subscribe(data => {
      console.log(data)
      if (data && data.email && data.uid) {
        this.toast.create({
          message: 'Bienvenue,${data.email}',
          duration: 3000
        });
      } else {
        console.log("vu")
        this.toast.create({
          message: 'Vous n etes pas connecté',
          duration: 3000
        });
      }
    })
  }
}