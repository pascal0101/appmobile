import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import {AuthService} from '../services/auth.service';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  
 
  public registerForm: FormGroup;

  
  constructor(public madelController:ModalController,public authservice:AuthService) {
        this.registerForm= new FormGroup({

          email: new FormControl(),
          password : new FormControl(),
        });
   }

    async register(){
      await this.authservice.signup(this.registerForm.value["email"],this.registerForm.value["password"]);
    }

    ngOnInit(){

    }
  
}
