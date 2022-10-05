import { Component, OnInit } from '@angular/core';
import { HeaderService } from '@services/index';
import { Options } from '@models/index';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  options: Options[] = [];
  activeName: string = '';
  isMenuOpen: boolean = false;
  isHistoryMenuOpen: boolean = false;

  constructor(private headerService: HeaderService) {
    this.options = this.headerService.getLinks();
    this.activeName = this.headerService.getActiveName();
    this.isMenuOpen = this.headerService.getStateMenu();
    this.isHistoryMenuOpen = this.headerService.getHistoryStateMenu();
  }

  ngOnInit(): void {}

  toggleMenu() {
    this.headerService.setStateMenu();
    this.isMenuOpen = this.headerService.getStateMenu();
  }

  toggleHistory() {
    this.headerService.setHistoryStateMenu();
    this.isHistoryMenuOpen = this.headerService.getHistoryStateMenu();
  }

  changeActiveLink(i: number): void {
    this.toggleMenu();

    this.headerService.changeActiveLink(i);
    this.headerService.setActiveName(i);

    this.options = this.headerService.getLinks();
    this.activeName = this.headerService.getActiveName();
  }
}
