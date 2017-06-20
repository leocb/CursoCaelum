import { Component, OnInit } from '@angular/core';
import { FotoComponent } from '../foto/foto.component';
import { AppService } from '../app.service';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html'
})
export class ListagemComponent implements OnInit {
  service: AppService;
  title = 'Bem-vindo ao CaelumPic!';

  constructor(service: AppService) {
    this.service = service
    this.service.listar()
  };

  ngOnInit() {
  }

}
