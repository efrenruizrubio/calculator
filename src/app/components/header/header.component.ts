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
  isMenuOpen: boolean = false;
  constructor(private headerService: HeaderService) {
    this.options = this.headerService.getLinks();
  }

  ngOnInit(): void {}

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
