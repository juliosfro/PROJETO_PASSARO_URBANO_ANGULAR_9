import { stringify } from "@angular/compiler/src/util";

export class Pedido {

    // Quando os parametros do construtor estao publicos eles sao refletidos como atributos
    // da classe que estamos implementando...
    constructor(
        public endereco: string,
        public numero: string,
        public complemento: string,
        public formaPagamento: string

    ) {

    }
}