import { stringify } from "@angular/compiler/src/util";
import { ItemCarrinho } from "./item-carrinho.model";

export class Pedido {

    // Quando os parametros do construtor estao publicos eles sao refletidos como atributos
    // da classe que estamos implementando...
    constructor(
        public id: string = '',
        public endereco: string,
        public numero: string,
        public complemento: string,
        public formaPagamento: string,
        public itens: Array<ItemCarrinho>

    ) { }
}