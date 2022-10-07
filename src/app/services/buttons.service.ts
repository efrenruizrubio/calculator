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
      type: 'numeric',
      name: '7',
    },
    {
      type: 'numeric',
      name: '8',
    },
    {
      type: 'numeric',
      name: '9',
    },
    {
      type: 'arithmetic',
      name: 'x',
    },
    {
      type: 'numeric',
      name: '4',
    },
    {
      type: 'numeric',
      name: '5',
    },
    {
      type: 'numeric',
      name: '6',
    },
    {
      type: 'arithmetic',
      name: '-',
    },
    {
      type: 'numeric',
      name: '1',
    },
    {
      type: 'numeric',
      name: '2',
    },
    {
      type: 'numeric',
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

  getFilteredButtons(filter: string): Button[] {
    return this.buttons.filter((button) => {
      return button.type === filter;
    });
  }
}
