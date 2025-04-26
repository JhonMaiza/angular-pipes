import { Component, signal } from '@angular/core';
import { CardComponent } from "../../components/card/card.component";
import { AsyncPipe, I18nPluralPipe, I18nSelectPipe, JsonPipe, KeyValuePipe, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { interval, map, tap } from 'rxjs';

const client1 = {
  name: 'Juan',
  gender: 'male',
  age: 41,
  address:'Quito'
};

const client2 = {
  name: 'Melissa',
  gender: 'female',
  age: 41,
  address:'Quito'
};
@Component({
  selector: 'app-uncommon-page',
  imports: [CardComponent, I18nSelectPipe, I18nPluralPipe, SlicePipe, JsonPipe, UpperCasePipe, KeyValuePipe, TitleCasePipe, AsyncPipe],
  templateUrl: './uncommon-page.component.html',
})
export default class UncommonPageComponent {

  //i18n
  client = signal( client1 );

  invitationMap = {
    male: 'invitarlo',
    female: 'invitarla'
  };

  changeClient (){
    if( this.client() === client1){
      this.client.set(client2);
      return;
    }
    this.client.set(client1);
  };

  clientsMap = signal( {
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos 2 cliente esperando',
    other: 'tenemos # cliente esperando',
  });

  clients = signal([
    'Maria',
    'Carlos',
    'Marta',
    'Pedro',
    'Ortega',
    'Miguel',
    'Carla',
    'Sebastian',
  ]);

  deleterCliente() {
    this.clients.update( (prev) => prev.slice(1));
  };

  profile = {
    name: 'Juan',
    age: 36,
    address: 'Quito'
  };

  promiseValue: Promise<string> = new Promise((resolve, reject) =>{
    setTimeout(() => {
      resolve('Tenemos data en la promesa');
      console.log('Promsea finalizada');
      
    }, 3500);
  });

  myObservableTimer = interval( 2000 ).pipe(
    map((value) => value +1 ),
    tap( ( value ) => console.log('tap', value)
    )
  );
}
