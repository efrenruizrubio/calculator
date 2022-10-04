import { Injectable } from '@angular/core';
import { Options } from '@models/index';

@Injectable({
  providedIn: 'root',
})
export class HeaderService {
  options: Options[] = [];

  constructor() {
    this.options = [
      {
        icon: '/assets/icons/standard.svg',
        name: 'Standard',
        active: true,
      },
      {
        icon: '/assets/icons/scientific.svg',

        name: 'Scientific',
        active: false,
      },
      {
        icon: '/assets/icons/graphing.svg',

        name: 'Graphing',
        active: false,
      },
      {
        icon: '/assets/icons/programmer.svg',

        name: 'Programmer',
        active: false,
      },
      {
        icon: '/assets/icons/date.svg',

        name: 'Date Calculation',
        active: false,
      },
    ];
  }

  getLinks() {
    return this.options;
  }

  changeActiveLink(i: number): void {
    this.options.forEach((option) => {
      option.active = false;
    });
    this.options[i].active = true;
  }
}
