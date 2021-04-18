import { Oferta } from './../models/oferta.model';
import { OfertasService } from './../services/ofertas.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'main-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [
    OfertasService
  ]
})


export class HomeComponent implements OnInit {

  public oferta_array: Oferta[] = [];

  constructor(private ofertasService: OfertasService) { }

  ngOnInit(): void {
    //this.oferta_array = this.ofertasService.getOfertas();
    //console.log(this.oferta_array)

    /* Abaixo dentro do then temos duas arrow function, 
    uma para o response e outra para o reject */

    /* O segundo parametro do then cai diretamente no catch */
    this.ofertasService.getOfertas().then((response: Oferta[]) => {
      this.oferta_array = response;
    }).catch((rejected: any) => {
      console.log(rejected);
    });
  }
}