import { DatePipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component, effect, inject, LOCALE_ID, signal } from '@angular/core';
import { interval } from 'rxjs';
import { AvailableLocale, LocaleService } from '../../services/locale.service';

@Component({
  selector: 'app-basic-page',
  imports: [
    LowerCasePipe,
    UpperCasePipe,
    TitleCasePipe,
    DatePipe,
  ],
  templateUrl: './basic-page.component.html',
})
export default class BasicPageComponent {
  localService = inject( LocaleService );
  currentLocale = signal( inject( LOCALE_ID ));

  nameLower = signal('jhon');
  nameUpper = signal('JHON');
  fullNmae = signal('JHon MaIZa');

  customDate = signal( new Date());

  tickingDateEffect = effect( ( onCleanup )=> {
    const interval = setInterval( () => {
      this.customDate.set( new Date() );
      console.log('tick');
      
    }, 1000);

    onCleanup( () => {
      clearInterval( interval )
    });
  });

  changeLocale( locale: AvailableLocale) {
    this.localService.changeLocale( locale );
  }

}
