import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'main-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css']
})
export class TopoComponent implements OnInit {

  termoPesquisa: string | null = null;

  constructor() { }

  ngOnInit(): void {
  }

  pesquisa(): void {
    // alert(`Estou pesquisando por: ${this.termoPesquisa}`);

  }

}
