import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.page.html',
  styleUrls: ['./transaction.page.scss'],
})
export class TransactionPage implements OnInit {
  qrData = 'https://ionicacademy.com/';
  scannedCode = null;
  elementType : 'url' | 'canvas' | 'img' = 'canvas';

  constructor(private BarcodeScanner: BarcodeScanner, private toastCtrl: ToastController) { }

  ngOnInit() {
  }
    scanCode(){
      this.BarcodeScanner.scan().then(
        barcodeData=>{
          this.scannedCode = barcodeData;
        }
      )
    }

    downloadQR(){
     /* const canvas = document.querySelector('canvas') as HTMLCanvasElement;
      const imageData = canvas.toDataURL('imge/jpeg').toString();
      console.log('data',imageData);

      let data = imageData.split(',')[1];
      this.base64ToGallery.base64ToGallery(data,{prefix: '_img',mediaScanner:true}).then(async res => {
        let toast = await this.toastCtrl.create({
          header:'QR code enregistré avec succès'
        });
        toast.present();
      },err => console.log('error',err)
      );*/
      
    }

}
