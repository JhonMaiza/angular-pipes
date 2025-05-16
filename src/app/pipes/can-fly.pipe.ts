import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'canFly'
})

export class CanFlyPipe implements PipeTransform {
    transform(canFly: boolean ): 'Puede volar' | 'No puede volar' {
        return canFly? 'Puede volar': 'No puede volar';
    }
}