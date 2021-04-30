import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'main-ordem-compra-sucesso',
  templateUrl: './ordem-compra-sucesso.component.html',
  styleUrls: ['./ordem-compra-sucesso.component.css']
})
export class OrdemCompraSucessoComponent implements OnInit {

  @Input() public idPedidoCompra: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
