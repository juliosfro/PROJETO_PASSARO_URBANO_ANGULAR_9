import { Pedido } from './../models/pedido.model';
import { OrdemCompraService } from './../services/ordem-compra.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'main-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  providers: [OrdemCompraService],
  styleUrls: ['./ordem-compra.component.css']
})
export class OrdemCompraComponent implements OnInit {

  public endereco: string = '';
  public numero: string = '';
  public complemento: string = '';
  public formaPagamento: string = '';

  // Eu sou obrigado a passar os atributos de pedido direto no construtor.
  public pedido: Pedido = new Pedido(this.endereco, this.numero, this.complemento, this.formaPagamento);


  constructor(private ordemCompraService: OrdemCompraService) {
  }

  ngOnInit(): void {
    // this.ordemCompraService.efetivarCompra();
  }


  countCaracterIgnoreSpace(arg: string): number {
    const resultado = arg.split('').filter(arg => arg.trim().length).join('');
    // alert(resultado.length);
    return resultado.length;
  }

  public confirmarCompra(): void {

    this.pedido.endereco = this.endereco;
    this.pedido.numero = this.numero;
    this.pedido.complemento = this.complemento;
    this.pedido.formaPagamento = this.formaPagamento;
    
    this.ordemCompraService.efetivarCompra(this.pedido).subscribe(response => console.log(response));
  }

}
