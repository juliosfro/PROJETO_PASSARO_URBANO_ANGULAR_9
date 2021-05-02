import { CarrinhoService } from './../services/carrinho.service';
import { Oferta } from './../models/oferta.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfertasService } from '../services/ofertas.service';

@Component({
  selector: 'main-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [OfertasService]
})
export class OfertaComponent implements OnInit {

  id_oferta: string | null = null;
  oferta: Oferta = new Oferta();

  constructor(private route: ActivatedRoute, private ofertasService: OfertasService, private carrinhoService: CarrinhoService) { }

  ngOnInit(): void {

    this.carrinhoService.exibirItens();
    /* Recuperacao do parametro id vindo na URI atraves de snapshot */
    // this.id_oferta = this.route.snapshot.paramMap.get('id');

    /* Recuperacao do parametro id vindo na URI atraves de subscribe */
    /* Toda vez que houver uma mudanca na rota a oferta sera atualizada na tela */
    this.route.paramMap.subscribe(parametro => {
      this.id_oferta = parametro.get('id');
      if (this.id_oferta !== null) {
        this.ofertasService.getOfertaPorId(parseInt(this.id_oferta)).then((response: Oferta[]) => {
          const oferta = response.shift();
          oferta !== undefined ? this.oferta = oferta : this.oferta;
        });
      }

    });
  }

  public adicionarItemCarrinho(): void {
    // console.log(this.oferta);
    this.carrinhoService.incluirItem(this.oferta);
    // const x = this.carrinhoService.exibirItens();
    // console.log(x);

  }

}
