import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'main-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css']
})
export class OrdemCompraComponent implements OnInit {

  public endereco: string = '';
  public numero: string = '';
  public complemento: string = '';
  public formaPagamento: string = '';


  constructor() {
  }

  ngOnInit(): void {
  }


  countCaracterIgnoreSpace(arg: string): number {
    const resultado = arg.split('').filter(arg => arg.trim().length).join('');
    // alert(resultado.length);
    return resultado.length;
  }

}
