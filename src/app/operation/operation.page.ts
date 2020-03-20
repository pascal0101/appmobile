import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-operation',
  templateUrl: './operation.page.html',
  styleUrls: ['./operation.page.scss'],
})
export class OperationPage implements OnInit {




  constructor(private iab: InAppBrowser) { }

  openBlank() {
    this.iab.create('https://paygateglobal.com', '_blank');
  }
  
  openSystem() {
    this.iab.create('https://paygateglobal.com', '_system');
  }

  ngOnInit() {
  }

}
