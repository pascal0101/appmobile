import { Component, OnInit } from '@angular/core';
import {Agence} from '../interfaces/agence';
import {AgenceService} from '../services/agence.service';
import {ActivatedRoute} from '@angular/router';
import {NavController, LoadingController} from '@ionic/angular';
//import { create } from 'domain';
@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
    agence : Agence = {
        Nom : '',
        Lieu : ''
    };
    AgenceId : null;

  constructor(private route : ActivatedRoute, private nav : NavController,
     private agenceService : AgenceService, private loadingController : LoadingController) { }

  ngOnInit() {
    this.AgenceId = this.route.snapshot.params['id'];
            if(this.AgenceId){
              this.loadAgence();
            }
    }
      async loadAgence(){
        const loading = await this.loadingController.create({
          message : 'loading...'
        });
        await loading.present();
        this.agenceService.getAgence(this.AgenceId).subscribe(res => {
          loading.dismiss();
          this.agence = res;
        })
      }


}
