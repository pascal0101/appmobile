import { Injectable } from '@angular/core';
import {Agence} from '../interfaces/agence';
import {AngularFirestore,AngularFirestoreCollection}  from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
export interface Agence{

}
@Injectable({
  providedIn: 'root'
})
export class AgenceService {
    private agencesCollection :AngularFirestoreCollection<Agence>;
    private agences : Observable<Agence[]>;
  constructor(db: AngularFirestore) { 
      this.agencesCollection = db.collection<Agence>('agences');
      this.agences = this.agencesCollection.snapshotChanges().pipe(map(
        actions =>{
          return actions.map(a =>{
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return {id, ...data};
          });
        }
      ));
    
  }

      getAgences(){
        return this.agences;
      }
      getAgence(id: string){
        return this.agencesCollection.doc<Agence>(id).valueChanges();
      }
      updateAgence(agence: Agence,id: string){
        return this.agencesCollection.doc(id).update(agence);
      }
      addAgence(agence: Agence){
        return this.agencesCollection.add(agence);
      }
      removeAgence(id: string){
          return this.agencesCollection.doc(id).delete();
      }
}
