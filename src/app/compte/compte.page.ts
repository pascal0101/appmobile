import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import { FormGroup,FormControl } from '@angular/forms';
import {ModalController} from '@ionic/angular';
@Component({
  selector: 'app-compte',
  templateUrl: './compte.page.html',
  styleUrls: ['./compte.page.scss'],
})
export class ComptePage implements OnInit {

  constructor(public modelController:ModalController,public authservice:AuthService,public afAuth:AngularFireAuth) { }

  async logout(){
    await this.afAuth.auth.signOut();
  }
  ngOnInit() {
  }

}
