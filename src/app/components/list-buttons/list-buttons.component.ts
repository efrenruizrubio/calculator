import { Component } from '@angular/core';
import { Button } from '@models/index';
import { ButtonsService } from '@services/index';

@Component({
  selector: 'app-list-buttons',
  templateUrl: './list-buttons.component.html',
  styleUrls: ['./list-buttons.component.scss'],
})
export class ListButtonsComponent {
  specialButtons: Button[] = [];
  arithmeticButtons: Button[] = [];
  numericButtons: Button[] = [];

  constructor(private buttonsService: ButtonsService) {
    this.specialButtons = this.buttonsService.getFilteredButtons('special');
    this.arithmeticButtons =
      this.buttonsService.getFilteredButtons('arithmetic');
    this.numericButtons = this.buttonsService.getFilteredButtons('numeric');
  }
}
