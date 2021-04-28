import { Pedido } from './../models/pedido.model';
import { OrdemCompraService } from './../services/ordem-compra.service';
import { Component, ViewChild } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';

@Component({
  selector: 'main-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  providers: [OrdemCompraService],
  styleUrls: ['./ordem-compra.component.css']
})
export class OrdemCompraComponent {

  public endereco: string = '';
  public numero: string = '';
  public complemento: string = '';
  public formaPagamento: string = '';
  public idPedidoCompra: number | undefined;

  // Eu sou obrigado a passar os atributos de pedido direto no construtor.
  public pedido: Pedido = new Pedido(this.endereco, this.numero, this.complemento, this.formaPagamento);

  @ViewChild('formOrdemCompra')
  private formularioOrdemDeCompra: NgForm | undefined;


  constructor(private ordemCompraService: OrdemCompraService) {
  }


  countCaracterIgnoreSpace(arg: string): number {
    const resultado = arg.split('').filter(arg => arg.trim().length).join('');
    // alert(resultado.length);
    return resultado.length;
  }

  public confirmarCompra(): void {

    this.pedido = this.formularioOrdemDeCompra?.value;
    this.ordemCompraService.efetivarCompra(this.pedido).subscribe(response => {
      // alert(`Id do pedido da compra => ` + response.id);
      this.idPedidoCompra = response.id;
    });

  }

  // Segunda maneira de implementar o metodo confirmar compra.
  public confirmarCompraDois(): void {

    this.pedido = this.formularioOrdemDeCompra?.value;
    console.log(this.pedido.endereco);

  }

}