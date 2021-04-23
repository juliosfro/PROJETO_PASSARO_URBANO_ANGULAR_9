import { OfertasService } from './../services/ofertas.service';
import { OndeFica } from './../models/onde-fica.model';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'main-onde-fica',
  templateUrl: './onde-fica.component.html',
  styleUrls: ['./onde-fica.component.css'],
  providers: [OfertasService]
})

export class OndeFicaComponent implements OnInit {

  id_oferta: string | null = null;
  onde_fica: OndeFica = new OndeFica();

  constructor(private route: ActivatedRoute, private ofertasService: OfertasService) { }

  ngOnInit(): void {
    this.route.parent?.paramMap.subscribe(param => {
      this.id_oferta = param.get('id');

      if (this.id_oferta !== null) {
        this.ofertasService.getOndeFicaOfertaPorId(parseInt(this.id_oferta)).then((response: OndeFica[]) => {
          this.onde_fica = response[0];
        });;

      }

    });

  }

}
