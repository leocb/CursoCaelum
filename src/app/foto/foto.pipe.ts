import { Pipe, PipeTransform } from '@angular/core'
import { FotoComponent } from './foto.component';

@Pipe({
    name: 'filtroPorTitulo'
})

export class FiltrarPorTitulo implements PipeTransform {
    transform(fotos: FotoComponent[], digitado: string): FotoComponent[] {
        // console.log('Thy monster!', fotos, digitado);
        digitado = digitado.toLowerCase();
        return fotos.filter(foto => foto.titulo.toLowerCase().includes(digitado));
    }
}
