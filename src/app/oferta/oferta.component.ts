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

  constructor(private route: ActivatedRoute, private ofertasService: OfertasService) { }

  ngOnInit(): void {
    /* Recuperacao do parametro id vindo na URI atraves de snapshot */
    // this.id_oferta = this.route.snapshot.paramMap.get('id');

    /* Recuperacao do parametro id vindo na URI atraves de subscribe */
    this.route.paramMap.subscribe(parametro => this.id_oferta = parametro.get('id'));

    if (this.id_oferta !== null) {
      this.ofertasService.getOfertaPorId(parseInt(this.id_oferta)).then((response: Oferta[]) => {
        const oferta = response.shift();
        oferta !== undefined ? this.oferta = oferta : this.oferta;
      });
    }

  }

}
