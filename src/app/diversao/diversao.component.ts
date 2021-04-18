import { OfertasService } from './../services/ofertas.service';
import { Component, OnInit } from '@angular/core';
import { Oferta } from '../models/oferta.model';

@Component({
  selector: 'main-diversao',
  templateUrl: './diversao.component.html',
  styleUrls: ['./diversao.component.css'],
  providers: [OfertasService]
})
export class DiversaoComponent implements OnInit {

  oferta_array: Array<Oferta> = [];

  constructor(private ofertasService: OfertasService) { }

  ngOnInit(): void {
    /* É opcional inferir o tipo de dados que virá na resposta */
    this.ofertasService.getOfertasPorCategoria('diversao').then((response) => {
      this.oferta_array = response;
    });
  }
}
