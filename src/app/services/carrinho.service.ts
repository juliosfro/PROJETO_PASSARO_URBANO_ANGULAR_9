import { Oferta } from './../models/oferta.model';
import { ItemCarrinho } from './../models/item-carrinho.model';
import { Injectable } from "@angular/core";


@Injectable()
export class CarrinhoService {

    public itens_carrinho: ItemCarrinho[] = [];

    public exibirItens(): ItemCarrinho[] {
        return this.itens_carrinho;
    }

    public incluirItem(oferta: Oferta): void {
        let itemCarrinho: ItemCarrinho = new ItemCarrinho(
            oferta.id,
            oferta.imagens[0].url,
            oferta.titulo,
            oferta.descricao_oferta,
            oferta.valor,
            1
        );

        // Verificar se o item a ser adicionado já consta no carrinho.
        const itemEncontrado = this.itens_carrinho.find((item: ItemCarrinho) => item.id === itemCarrinho.id);
        if (itemEncontrado) {
            itemEncontrado.quantidade += 1;
        } else {
            // Para adicionar o item no array de itens do carrinho.
            this.itens_carrinho.push(itemCarrinho);
        }

        // console.log('Oferta recebida no serviço: ' + JSON.stringify(itemCarrinho));

    }

    public adicionarQuantidade(itemCarrinho: ItemCarrinho): void {
        //incrementar quantidade
        let itemCarrinhoEncontrado = this.itens_carrinho.find((item: ItemCarrinho) => item.id === itemCarrinho.id)
        if (itemCarrinhoEncontrado) {
            itemCarrinhoEncontrado.quantidade += 1
        }
    }

    public diminuirQuantidade(itemCarrinho: ItemCarrinho): void {
        let itemCarrinhoEncontrado = this.itens_carrinho.find((item: ItemCarrinho) => item.id === itemCarrinho.id)
        if (itemCarrinhoEncontrado) {
            itemCarrinhoEncontrado.quantidade -= 1

            if (itemCarrinhoEncontrado.quantidade === 0) {
                this.itens_carrinho.splice(this.itens_carrinho.indexOf(itemCarrinhoEncontrado), 1)
            }
        }
    }

    public totalCarrinhoCompras(): number {
        let valor_total_carrinho = 0;
        this.itens_carrinho.map((item: ItemCarrinho) => {
            valor_total_carrinho += (item.valor * item.quantidade);
        });
        return valor_total_carrinho;
    }

    public limparCarrinho(): void {
        this.itens_carrinho = [];
    }

}