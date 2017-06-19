import '../../node_modules/rxjs/add/operator/map';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { routing } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FotoModule } from './foto/foto.module';
import { PainelModule } from './painel/painel.module';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ListagemComponent } from './listagem/listagem.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    ListagemComponent
  ],
  imports: [
    routing,
    BrowserModule,
    HttpModule,
    FotoModule,
    PainelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
