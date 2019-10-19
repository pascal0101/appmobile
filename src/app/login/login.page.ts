import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(public afDB: AngularFireDatabase) { }

  ngOnInit() {
  }

  add() {
    this.afDB.list('Users').push({
      pseudo: 'drissas'
    });
  }

}
