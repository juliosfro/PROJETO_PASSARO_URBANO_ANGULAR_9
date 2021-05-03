import { ItemCarrinho } from './../models/item-carrinho.model';
import { CarrinhoService } from './../services/carrinho.service';
import { Pedido } from './../models/pedido.model';
import { OrdemCompraService } from './../services/ordem-compra.service';
import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'main-ordem-compra-reactive',
  templateUrl: './ordem-compra-reactive.component.html',
  styleUrls: ['./ordem-compra-reactive.component.css'],
  providers: [OrdemCompraService]
})

export class OrdemCompraReactiveComponent implements OnInit {

  public pedido: Pedido = this.criarPedido(null);

  constructor(private ordemCompraService: OrdemCompraService, public carrinhoService: CarrinhoService) { }

  // Eh necessario sincronizar com o template html
  public formularioOrdemDeCompra: FormGroup = new FormGroup({
    "endereco": new FormControl(null, [Validators.required, Validators.minLength(5), Validators.maxLength(80), this.enderecoValidator]),
    "numero": new FormControl(null, [Validators.required, Validators.minLength(2), Validators.maxLength(10)]),
    "complemento": new FormControl(null),
    "formaPagamento": new FormControl('', [Validators.required])
  });


  public idPedidoCompra: number = 0;
  public itensCarrinho: ItemCarrinho[] = new Array<ItemCarrinho>();

  ngOnInit() {

    this.itensCarrinho = this.carrinhoService.exibirItens();
    // console.log(this.itensCarrinho);

  }

  public confirmarCompra(): void {
    // Para verificar se o formulario eh valido ou nao.
    if (this.formularioOrdemDeCompra.status === 'VALID') {
      // Para verificar se ha itens no carrinho
      if (this.carrinhoService.exibirItens().length) {
        const pedido: Pedido = this.criarPedido(null);
        console.log(pedido);
        this.ordemCompraService.efetivarCompra(pedido).subscribe((response: Pedido) => {
          const pedidoSalvo: Pedido = this.criarPedido(response);
          this.idPedidoCompra = parseInt(pedidoSalvo.id);

          this.carrinhoService.limparCarrinho();
          // alert(this.idPedidoCompra);
        });
      } else {
        alert('Você não adicionou itens no carrinho!');
      }

    }
  }


  /* Esse metodo vai fazer uma ponte entre o template e o service do carrinho */
  adicionar(item: ItemCarrinho): void {
    // alert(JSON.stringify(item));
    this.carrinhoService.adicionarQuantidade(item);
  }

  diminuir(item: ItemCarrinho): void {
    // alert(JSON.stringify(item));
    this.carrinhoService.diminuirQuantidade(item);
  }


  criarPedido(pedido: any): Pedido {
    if (pedido === null) {
      return new Pedido(
        '',
        this.formularioOrdemDeCompra?.value.endereco,
        this.formularioOrdemDeCompra?.value.numero,
        this.formularioOrdemDeCompra?.value.complemento,
        this.formularioOrdemDeCompra?.value.formaPagamento,
        this.carrinhoService.exibirItens()
      );
    } else if (pedido !== undefined) {
      return new Pedido(pedido.id, pedido.endereco, pedido.numero, pedido.complemento, pedido.formaPagamento, pedido.itens);
    }
    return new Pedido('', '', '', '', '', []);
  }


  limpaFormulario(): void {
    this.formularioOrdemDeCompra.get('endereco')?.reset();
    this.formularioOrdemDeCompra.get('numero')?.reset();
    this.formularioOrdemDeCompra.get('complemento')?.reset();
    this.formularioOrdemDeCompra.get('formaPagamento')?.reset();
  }

  // Valida tamanho minimo de 5 caracteres ignorando espacos vazio.
  enderecoValidator(control: FormControl) {
    const endereco: string = control.value;
    if (endereco !== null && endereco !== undefined && endereco !== '') {
      const tamanho = endereco.split('').filter(endereco => endereco.trim()).join('').length;
      return tamanho >= 5 ? null : { enderecoInvalido: true };
    } else {
      return { enderecoInvalido: true }
    }
  }

  cepValidator(control: FormControl) {
    const cep = control.value;
    //alert(cep)
    if (cep && cep !== '') {
      const validacep = /^[0-9]{8}$/;
      return validacep.test(cep) ? null : { cepInvalido: true };
    }
    return null;
  }

}
