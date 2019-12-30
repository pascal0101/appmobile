import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import { FormGroup,FormControl } from '@angular/forms';
import {ModalController} from '@ionic/angular';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireAuth} from '@angular/fire/auth';
@Component({
  selector: 'app-compte',
  templateUrl: './compte.page.html',
  styleUrls: ['./compte.page.scss'],
})
export class ComptePage implements OnInit {

  constructor(public afAuth:AngularFireAuth) { }

  async logout(){
        await this.afAuth.auth.signOut().then(()=>{
          console.log("deconnexion");
        }).catch((error)=>{
          console.log(error);
        });
  }
  ngOnInit() {
  }

}
