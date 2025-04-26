import { CurrencyPipe, DecimalPipe, PercentPipe } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-numbers-page',
  imports: [ DecimalPipe, CurrencyPipe, PercentPipe ],
  templateUrl: './numbers-page.component.html',
})
export default class NumbersPageComponent {
  totalSells = signal( 5_445_646.5567 );
  percent = signal( 0.4856 );
}
