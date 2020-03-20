import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { Base64ToGallery } from '@ionic-native/base64-to-gallery/ngx';
import { Geolocation} from '@ionic-native/geolocation/ngx';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';
import {AngularFirestoreModule}  from '@angular/fire/firestore';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

export const firebaseConfig = {
  apiKey: "AIzaSyA6fQsRffiFWq7nRGkPr-8RnZz9S5Ay2kk",
    authDomain: "powerbank-7742f.firebaseapp.com",
    databaseURL: "https://powerbank-7742f.firebaseio.com",
    projectId: "powerbank-7742f",
    storageBucket: "powerbank-7742f.appspot.com",
    messagingSenderId: "318688827428",
    appId: "1:318688827428:web:b6fcfb29ee84f494d9e0b1",
    measurementId: "G-ZFGCFP0M2H"
};
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
   AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
     AngularFirestoreModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    BarcodeScanner,
    Base64ToGallery,
    Geolocation,
    InAppBrowser
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
