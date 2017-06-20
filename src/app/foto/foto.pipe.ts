import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
    name: 'filtroPorTitulo'
})

export class FiltrarPorTitulo implements PipeTransform {
    transform(titulo) {
        return titulo;
    }
}
