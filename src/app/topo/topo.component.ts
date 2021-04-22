import { HttpResponse } from '@angular/common/http';
import { Oferta } from './../models/oferta.model';
import { OfertasService } from './../services/ofertas.service';
import { Component, OnInit } from '@angular/core';
import { debounceTime, switchMap } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'main-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [OfertasService]
})
export class TopoComponent implements OnInit {

  termoPesquisa: string = '';
  oferta: Oferta = new Oferta();
  ofertas: HttpResponse<Oferta[]> | undefined;

  private _subjectPesquisa: Subject<string> = new Subject<string>();

  constructor(private ofertasService: OfertasService) { }

  ngOnInit(): void {
    /* A pesquisa aguardara o usuario por 1 segundo para ele digitar o termo */
    this._subjectPesquisa.pipe(debounceTime(1000), switchMap((termo: string) =>
      this.ofertasService.getPesquisaOfertasPorNome(termo)))
      .subscribe((response: HttpResponse<Oferta[]>) => {
        this.ofertas = response
        console.log(response);
      });
  }

  pesquisa(): void {
    console.log(this.termoPesquisa);
    this._subjectPesquisa.next(this.termoPesquisa);




    // this.ofertasService.getPesquisaOfertasPorNome(this.termoPesquisa).subscribe((response: HttpResponse<Oferta[]>) => {

    //   // Estamos recebendo o HttpResponse do lado do servidor da API REST
    //   const requestStatus = response.status;
    //   /* Primeiro parametro eh a response */
    //   const oferta = response.body?.shift();
    //   oferta !== undefined ? this.oferta = oferta : this.oferta;
    //   console.log(this.oferta.descricao_oferta);

    // }, error => {
    //   /* Segundo parametro eh o erro */
    //   console.log(`Não há conexão com o servidor: => ${error.status}`);

    //   /* Terceiro parametro eh a conclusao */
    // }, () => console.log(`Fluxo de eventos completo`));
  }
}
