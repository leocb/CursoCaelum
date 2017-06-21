import { Component, OnInit } from '@angular/core';
import { FotoComponent } from '../foto/foto.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AppService } from '../app.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html'
})
export class CadastroComponent implements OnInit {

  foto: FotoComponent = new FotoComponent();
  service: AppService;
  formCadastro: FormGroup;

  constructor( formBuilder: FormBuilder, service: AppService) {
    this.formCadastro = formBuilder.group({
      titulo: ['' , Validators.compose([Validators.required, Validators.minLength(3)])],
      url: ['', Validators.compose([Validators.required, Validators.pattern(/https?\:\/\/\S+\.\S+/i)])],
      descricao: ['']
    })

    this.service = service
  }

  ngOnInit() {
  }

  cadastrar(event: Event) {
    this.service.cadastrar(this.foto).subscribe(
      response => console.log('Foto gravada com sucesso!'),
      erro => console.log('Erro: ' + erro.status, erro))
  }

}
