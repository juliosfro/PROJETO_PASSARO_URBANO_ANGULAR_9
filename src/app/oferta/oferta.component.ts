import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'main-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css']
})
export class OfertaComponent implements OnInit {

  id_oferta: string | null = null;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    /* Recuperacao do parametro id vindo na URI atraves de snapshot */
    this.id_oferta = this.route.snapshot.paramMap.get('id');

    /* Recuperacao do parametro id vindo na URI atraves de subscribe */
    // this.route.paramMap.subscribe(parametro => this.id_oferta = parametro.get('id'));
  }

}
