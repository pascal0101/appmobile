import { Component, OnInit } from '@angular/core';
import {Agence} from '../interfaces/agence';
import {AgenceService} from '../services/agence.service';
import {ActivatedRoute} from '@angular/router';
import {NavController, LoadingController} from '@ionic/angular';

import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Map, tileLayer, marker, polyline, control, Routing, circle } from "leaflet";
import { present } from '@ionic/core/dist/types/utils/overlays';
//import { create } from 'domain';
@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
    agence : Agence = {
        Nom : '',
        Lieu : '',
        Longitude: '',
        Latitude: '',
        Numero: ''
    };
    AgenceId : null;
    longitude : string;
    latitude : string;
    numero : string;
    lieu : string;
    map: Map;
    marker: any;
    latLong = [];
    propertyList = [];
  

  constructor(private route : ActivatedRoute, private nav : NavController,
     private agenceService : AgenceService, private loadingController : LoadingController,private geolocation: Geolocation) { }

     ionViewWillEnter() {
      this.showMap();
    }
    
   

  ngOnInit() {
    this.AgenceId = this.route.snapshot.params['id'];
            if(this.AgenceId){
              this.loadAgence();
             
            }
    }
      async loadAgence(){
        const loading = await this.loadingController.create({
          message : 'Chargement...'
        });
        await loading.present();
        this.agenceService.getAgence(this.AgenceId).subscribe(res => {
          loading.dismiss(); 
          this.longitude = res.Longitude; 
          this.latitude = res.Latitude;
          this.lieu = res.Lieu;    
          this.agence = res;
          
          console.log(this.longitude,this.latitude);
          //this.map = new Map('myMap').setView([6.212069, 1.1875334], 10);
          this.map = new Map('myMap').setView([this.latitude,this.longitude], 16);
          tileLayer('https://{s}.tile.osm.org/{z}/{x}/{y}.png').addTo(this.map);
          marker([this.latitude,this.longitude]).addTo(this.map)
          .bindPopup('<a target="_blank" href="http://maps.google.com/maps?q=6.176197,1.214317">Se rendre</a>')
          .openPopup();
        })
        
      }

      showMap() {
       
      }



}
