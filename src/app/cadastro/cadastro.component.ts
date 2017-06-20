import { Component, OnInit } from '@angular/core';
import { FotoComponent } from '../foto/foto.component';
import {Headers, Http} from '@angular/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html'
})
export class CadastroComponent implements OnInit {

  foto: FotoComponent = new FotoComponent();
  http: Http;

  formCadastro: FormGroup;

  constructor(http: Http, formBuilder: FormBuilder) {
    this.http = http;
    this.formCadastro = formBuilder.group({
      titulo: ['' , Validators.compose([Validators.required, Validators.minLength(3)])],
      url: ['', Validators.compose([Validators.required, Validators.pattern(/https?\:\/\/\S+\.\S+/i)])],
      descricao: ['']
    })
  }

  ngOnInit() {
  }

  cadastrar(event: Event) {
    const cabecalho: Headers = new Headers;
    cabecalho.append('content-type', 'application/json');

    this.http.post('http://localhost:3000/v1/fotos', JSON.stringify(this.foto), {headers: cabecalho})
             .subscribe(response => console.log('Foto gravada com sucesso!'),
                        erro => console.log('Erro: ' + erro.status, erro))
  }

}
