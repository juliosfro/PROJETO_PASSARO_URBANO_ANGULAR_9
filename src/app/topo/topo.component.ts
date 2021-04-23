import { HttpResponse } from '@angular/common/http';
import { Oferta } from './../models/oferta.model';
import { OfertasService } from './../services/ofertas.service';
import { Component, OnInit } from '@angular/core';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Subject, Observable } from 'rxjs';

@Component({
  selector: 'main-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [OfertasService]
})
export class TopoComponent implements OnInit {

  termoPesquisa: string = '';
  ofertaDetails: Array<Oferta> = [];
  /* Pode ser usado em conjunto com o pipe async */
  public oferta_array: Observable<Oferta[]> = new Observable<Oferta[]>();
  /* Nao eh possivel utilizar em conjunto com o pipe async */
  public array_ofertas_promise: Promise<HttpResponse<Oferta[]>> | any;

  /* Pode ser utilizado somente com o ngFor mas nao permite pipe async */
  ofertaResponseHttp: HttpResponse<Oferta[]> = new HttpResponse<Oferta[]>();

  private _subjectPesquisa: Subject<string> = new Subject<string>();

  constructor(private ofertasService: OfertasService) { }

  ngOnInit(): void {

    /* A pesquisa aguardara o usuario por 1 segundo para ele digitar o termo */
    this._subjectPesquisa.pipe(debounceTime(500), distinctUntilChanged(), switchMap((termo: string) =>
      this.ofertasService.getPesquisaOfertasPorNome(termo)))
      .subscribe((response: HttpResponse<Oferta[]>) => {

        this.ofertaDetails = response.body !== null ? response.body : this.ofertaDetails;
        // this.ofertaResponseHttp = response;

      }, error => {
        console.log(`Não há conexão com o servidor, código: ${error.status}`);
      });

  }

  pesquisa(): void {

    if (this.termoPesquisa.trim() !== ''
      && this.termoPesquisa !== undefined
      && this.termoPesquisa !== null) {
      // alert('pesquisa')
      this._subjectPesquisa.next(this.termoPesquisa);
    } else if (this.termoPesquisa === null || this.termoPesquisa.trim() === '') {
      this.ofertaDetails = [];
    }


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

  limpaPesquisa(): void {
    this.termoPesquisa = '';
    this._subjectPesquisa.next('');
  }
}
