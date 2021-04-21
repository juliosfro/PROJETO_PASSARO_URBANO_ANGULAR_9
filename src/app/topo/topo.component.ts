import { HttpResponse } from '@angular/common/http';
import { Oferta } from './../models/oferta.model';
import { OfertasService } from './../services/ofertas.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'main-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [OfertasService]
})
export class TopoComponent implements OnInit {

  termoPesquisa: string = '';
  oferta: Oferta = new Oferta();

  constructor(private ofertasService: OfertasService) { }

  ngOnInit(): void {
  }

  pesquisa(): void {
    this.ofertasService.getPesquisaOfertasPorNome(this.termoPesquisa).subscribe((response: HttpResponse<Oferta[]>) => {

      // Estamos recebendo o HttpResponse do lado do servidor da API REST
      const requestStatus = response.status;
      const oferta = response.body?.shift();
      oferta !== undefined ? this.oferta = oferta : this.oferta;
      console.log(this.oferta.descricao_oferta);

    }, error => {
      console.log(`Não há conexão com o servidor: => ${error.status}`);

    });
  }
}
