import { Component } from '@angular/core';
import { FotoModule } from './foto/foto.module';
import { FotoComponent } from './foto/foto.component';
import { Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bem-vindo ao CaelumPic!';
  fotos: FotoComponent[];
  constructor(http: Http) {
    http.get('http://localhost:3000/v1/fotos')
        .map(response => response.json())
        .subscribe(fotos => this.fotos = fotos, erro => console.error(erro)
    );
  };
}
