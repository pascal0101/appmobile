import { Component, OnInit } from '@angular/core';
import {Agence} from '../interfaces/agence';
import {AgenceService} from '../services/agence.service';
@Component({
  selector: 'app-agences',
  templateUrl: './agences.page.html',
  styleUrls: ['./agences.page.scss'],
})
export class AgencesPage implements OnInit {
  agences : Agence[];
  constructor(private agenceService:AgenceService) {}

  ngOnInit() {
    this.agenceService.getAgences().subscribe(res => this.agences = res);
  }

}
