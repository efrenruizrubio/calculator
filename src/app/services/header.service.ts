import { Injectable } from '@angular/core';
import { Options } from '@models/index';

@Injectable({
  providedIn: 'root',
})
export class HeaderService {
  options: Options[] = [];
  activeName: string = 'Standard';
  menuState: boolean = false;
  historyState: boolean = false;

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

  getStateMenu(): boolean {
    return this.menuState;
  }

  setStateMenu(): void {
    this.menuState = !this.menuState;
  }

  getHistoryStateMenu(): boolean {
    return this.historyState;
  }

  setHistoryStateMenu(): void {
    this.historyState = !this.historyState;
  }

  getLinks(): Options[] {
    return this.options;
  }

  changeActiveLink(i: number): void {
    this.options.forEach((option) => {
      option.active = false;
    });
    this.options[i].active = true;

    this.activeName = this.options[i].name;
  }

  getActiveName(): string {
    return this.activeName;
  }

  setActiveName(i: number): void {
    this.activeName = this.options[i].name;
  }
}
