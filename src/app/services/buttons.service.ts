import { Injectable } from '@angular/core';
import { Button } from '@models/index';

@Injectable({
  providedIn: 'root',
})
export class ButtonsService {
  private buttons: Button[] = [
    {
      type: 'special',
      name: 'MC',
    },
    {
      type: 'special',
      name: 'MR',
    },
    {
      type: 'special',
      name: 'M+',
    },
    {
      type: 'special',
      name: 'M-',
    },
    {
      type: 'special',
      name: 'MS',
    },
    {
      type: 'special',
      name: 'M',
    },
    {
      type: 'arithmetic',
      name: '%',
    },
    {
      type: 'arithmetic',
      name: 'CE',
    },
    {
      type: 'arithmetic',
      name: 'C',
    },
    {
      type: 'arithmetic',
      name: '⌫',
    },
    {
      type: 'arithmetic',
      name: '1/x',
    },
    {
      type: 'arithmetic',
      name: 'x²',
    },
    {
      type: 'arithmetic',
      name: '√',
    },
    {
      type: 'arithmetic',
      name: '÷',
    },
    {
      type: 'number',
      name: '7',
    },
    {
      type: 'number',
      name: '8',
    },
    {
      type: 'number',
      name: '9',
    },
    {
      type: 'arithmetic',
      name: 'x',
    },
    {
      type: 'number',
      name: '4',
    },
    {
      type: 'number',
      name: '5',
    },
    {
      type: 'number',
      name: '6',
    },
    {
      type: 'arithmetic',
      name: '-',
    },
    {
      type: 'number',
      name: '1',
    },
    {
      type: 'number',
      name: '2',
    },
    {
      type: 'number',
      name: '3',
    },
    {
      type: 'arithmetic',
      name: '+',
    },
    {
      type: 'arithmetic',
      name: '+/-',
    },
    {
      type: 'arithmetic',
      name: '0',
    },
    {
      type: 'arithmetic',
      name: '.',
    },
    {
      type: 'result',
      name: '=',
    },
  ];
  constructor() {}

  getButtons(): Button[] {
    return this.buttons;
  }
}
