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

  constructor(private ofertasService: OfertasService) { }

  public ofertas: Oferta[] = [];

  ngOnInit(): void {
    this.ofertas = this.ofertasService.getofertas();
    console.log(this.ofertas);
  }

}
