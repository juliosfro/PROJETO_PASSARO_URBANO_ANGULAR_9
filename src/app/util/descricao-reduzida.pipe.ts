import { Pipe, PipeTransform } from '@angular/core';

/* Precisamos dar o export pois vamos utilizar em outros arquivos. */
@Pipe({ name: 'descricaoReduzida', pure: true })
export class DescricaoReduzida implements PipeTransform {

    /* Vamos truncar na 15 posicao e concatenar ... */
    transform(value: string, truncarEm: number = 15): string {
        return value.length > truncarEm ? value.substr(0, truncarEm) + '...' : value;
    }
}