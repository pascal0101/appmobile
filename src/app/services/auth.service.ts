import { Injectable } from '@angular/core';
import { AngularFireAuth} from '@angular/fire/auth';
import { AngularFireDatabase} from '@angular/fire/database';
import { NavController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 

  constructor(private nacCtrl:NavController,public afAuth:AngularFireAuth,public afDB:AngularFireDatabase) { 
    afAuth.auth.onAuthStateChanged((user)=>{
          if(user){
              this.nacCtrl.navigateRoot(['/home']);
          }else{
              this.nacCtrl.navigateRoot(['']);
          }
    });
  }

    async  login(email: string, password: string){
       await this.afAuth.auth.signInWithEmailAndPassword(email,password).then((success)=>{
          console.log(success);
        }).catch((error)=>{
          console.log(error);
        });
      }
      async signup(email: string, password: string){
        await this.afAuth.auth.createUserWithEmailAndPassword(email,password).then((success)=>{
          console.log(success);
        }).catch((error)=>{
          console.log(error);
        });
      }

      async logout(){
        await this.afAuth.auth.signOut().then(()=>{
          console.log("logget out");
         
        }).catch((error)=>{
          console.log(error);
        });
      }

     
}
