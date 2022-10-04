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
        name: 'Standard',
        active: true,
      },
      {
        name: 'Scientific',
        active: false,
      },
      {
        name: 'Graphing',
        active: false,
      },
      {
        name: 'Programmer',
        active: false,
      },
      {
        name: 'Date Calculation',
        active: false,
      },
    ];
  }

  getLinks() {
    return this.options;
  }
}
