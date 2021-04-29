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

  public endereco: string | undefined;

  // Eh necessario sincronizar com o template html
  public formularioOrdemDeCompra: FormGroup = new FormGroup({
    "endereco": new FormControl(null, [Validators.required, Validators.minLength(5), Validators.maxLength(80), this.enderecoValidator]),
    "numero": new FormControl(null, [Validators.required, Validators.minLength(2), Validators.maxLength(10)]),
    "complemento": new FormControl(null),
    "formaPagamento": new FormControl(null, [Validators.required])
  });

  constructor(private ordemCompraService: OrdemCompraService) { }

  ngOnInit() {

  }

  public confirmarCompra(): void {
    console.log(this.formularioOrdemDeCompra);
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
