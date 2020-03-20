import { Component, OnInit } from '@angular/core';
import {Agence} from '../interfaces/agence';
import {AgenceService} from '../services/agence.service';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-agences',
  templateUrl: './agences.page.html',
  styleUrls: ['./agences.page.scss'],
})
export class AgencesPage implements OnInit {

  agences : Agence[];
  constructor(private agenceService:AgenceService,private router: Router,private nacCtrl:NavController) {}
 
  ngOnInit(){
  
    console.log("bonjour");
    this.agenceService.getAgences().subscribe(res => this.agences = res);
  }
 
  ionViewWillEnter() {
    //this.ngOnInit()
    console.log("bonsoir");
    this.agenceService.getAgences().subscribe(res => this.agences = res);
    
  }

  doRefresh(event) {
    console.log('Begin async operation');
    
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

}
