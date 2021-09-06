import { Component, Input, OnInit, ViewChild } from '@angular/core';
import * as _ from 'lodash';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { MatTabGroup } from '@angular/material/tabs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'exemple-modele',
  templateUrl: './exemple-modele.component.html',
  styleUrls: ['./exemple-modele.component.scss'],
})
export class ExempleModeleComponent implements OnInit {
  @Input() nomFichier: string = '';
  @Input() codeSourceUniquement: boolean = false;

  @ViewChild('tab') tabComponent: MatTabGroup | undefined;

  html: string = '';
  ts: string = '';
  scss: string = '';

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    const nomComposant: string = _.last(this.nomFichier.split('/'))!;

    this.httpClient.get(`./sandbox/code${this.nomFichier}/${nomComposant}.component.html`, { responseType: 'text' })
      .subscribe(response => {
        this.html = response;
      });

    this.httpClient.get(`./sandbox/code${this.nomFichier}/${nomComposant}.component.ts`, { responseType: 'text' })
      .subscribe(response => {
        this.ts = response;
      });

    this.httpClient.get(`./sandbox/code${this.nomFichier}/${nomComposant}.component.scss`, { responseType: 'text' })
      .subscribe(response => {
        this.scss = response;
      });
  }

  gereAffichage(): void {
    // if (this.tabComponent && coerceBooleanProperty(this.codeSourceUniquement)) {
    //   this.tabComponent.removeTab(0);
    // }
  }
}
