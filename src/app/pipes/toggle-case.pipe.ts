import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'toggleClase'
})

export class ToggleCasePipe implements PipeTransform {
    transform(value: string, upper: boolean = true): string {
        console.log( value );
        
        return upper? value.toUpperCase(): value.toLowerCase();
    }
}