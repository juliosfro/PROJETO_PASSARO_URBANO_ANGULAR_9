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
  public formaPagamentoEstadoAlterado: boolean = false;
  public formEstado: string = 'disabled';


  constructor() {
  }

  ngOnInit(): void {
  }

  mostrarOpcaoSelecionada(): void {
    alert(this.formaPagamento);
  }

  alterarEstadoPrimitivo(): void {
    this.formaPagamentoEstadoAlterado = true;
  }

  countCaracterIgnoreSpace(arg: string): number {
    const resultado = arg.split('').filter(arg => arg.trim().length).join('');
    // alert(resultado.length);
    return resultado.length;
  }

}
