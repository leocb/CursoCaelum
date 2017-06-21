import { Component, OnInit } from '@angular/core';
import { FotoComponent } from '../foto/foto.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AppService } from '../app.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html'
})
export class CadastroComponent implements OnInit {

  foto: FotoComponent = new FotoComponent();
  service: AppService;
  formCadastro: FormGroup;
  rota: ActivatedRoute;

  idFotoSendoEditada = ''

  constructor( formBuilder: FormBuilder, service: AppService, rota: ActivatedRoute) {
    this.formCadastro = formBuilder.group({
      titulo: ['' , Validators.compose([Validators.required, Validators.minLength(3)])],
      url: ['', Validators.compose([Validators.required, Validators.pattern(/https?\:\/\/\S+\.\S+ || data\:image /i)])],
      descricao: ['']
    })

    this.service = service
    this.rota = rota

    this.rota.params.subscribe(
      response => {
        if (response.id !== undefined) {
          service.detalheFoto(response.id).subscribe(fotos => {
            this.foto = fotos
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
    if (this.foto._id) {
    this.service.atualizar(this.foto).subscribe(
      response => console.log('Foto atualizada com sucesso!'),
      erro => console.log('Erro: ' + erro.status, erro))
    } else {
    this.service.cadastrar(this.foto).subscribe(
      response => console.log('Foto gravada com sucesso!'),
      erro => console.log('Erro: ' + erro.status, erro))
    }
  }

}
