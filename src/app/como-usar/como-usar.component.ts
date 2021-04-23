import { ComoUsar } from './../models/como-usar.model';
import { OfertasService } from './../services/ofertas.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'main-como-usar',
  templateUrl: './como-usar.component.html',
  styleUrls: ['./como-usar.component.css'],
  providers: [OfertasService]
})
export class ComoUsarComponent implements OnInit {

  id_oferta: string | null = null;
  comoUsar = new ComoUsar();

  constructor(private route: ActivatedRoute, private ofertasService: OfertasService) { }

  ngOnInit(): void {
    this.route.parent?.paramMap.subscribe(param => {
      this.id_oferta = param.get('id');
      
      if (this.id_oferta !== null) {
        this.ofertasService.getComoUsarOfertaPorId(parseInt(this.id_oferta)).then((response: ComoUsar[]) => {
          this.comoUsar = response[0];
        });;

      }

    });

  }

}
