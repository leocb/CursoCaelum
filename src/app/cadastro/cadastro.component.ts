import { Component, OnInit } from '@angular/core';
import { FotoComponent } from '../foto/foto.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AppService, Mensagem } from '../app.service';
import { Router, ActivatedRoute } from '@angular/router';
import { routing } from '../app.routes';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html'
})
export class CadastroComponent implements OnInit {

  foto: FotoComponent = new FotoComponent();
  service: AppService;
  formCadastro: FormGroup;
  rota: ActivatedRoute;
  roteador: Router;
  mensagem: string
  tituloTela = 'Cadastro de fotos'

  idFotoSendoEditada = ''

  constructor( formBuilder: FormBuilder, service: AppService, rota: ActivatedRoute, roteador: Router) {
    this.formCadastro = formBuilder.group({
      titulo: ['' , Validators.compose([Validators.required, Validators.minLength(3)])],
      url: ['', Validators.compose([Validators.required, Validators.pattern(/https?\:\/\/\S+\.\S+ || data\:image /i)])],
      descricao: ['']
    })

    this.service = service
    this.rota = rota
    this.roteador = roteador

    this.rota.params.subscribe(
      response => {
        if (response.id !== undefined) {
          service.detalheFoto(response.id).subscribe(fotos => {
            this.foto = fotos
            this.tituloTela = `Alterando foto "${this.foto.titulo}"`
          },
          erro => console.log(erro))
        }
      },
      erro => console.log(erro)
      )
  }

  ngOnInit() {
  }

  cadastrar(event: Event) {
    this.service.cadastrar(this.foto).subscribe(
      (response: Mensagem) => {
        this.mensagem = response.mensagem
        if (this.foto._id) {
          setTimeout(() => {this.roteador.navigate([''])}, 1500)
        }
      },
      erro => console.log('Erro: ' + erro.status, erro))
  }
}
