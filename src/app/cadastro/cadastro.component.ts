import { Component, OnInit } from '@angular/core';
import { FotoComponent } from '../foto/foto.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html'
})
export class CadastroComponent implements OnInit {

  foto: FotoComponent = new FotoComponent();
  formCadastro: FormGroup;

  constructor( formBuilder: FormBuilder) {
    this.formCadastro = formBuilder.group({
      titulo: ['' , Validators.compose([Validators.required, Validators.minLength(3)])],
      url: ['', Validators.compose([Validators.required, Validators.pattern(/https?\:\/\/\S+\.\S+/i)])],
      descricao: ['']
    })
  }

  ngOnInit() {
  }

  cadastrar(event: Event) {
  }

}
