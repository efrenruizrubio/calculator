import { Component } from '@angular/core';
import { Button } from '@models/index';
import { ButtonsService } from '@services/index';

@Component({
  selector: 'app-list-buttons',
  templateUrl: './list-buttons.component.html',
  styleUrls: ['./list-buttons.component.scss'],
})
export class ListButtonsComponent {
  buttons: Button[] = [];

  constructor(private buttonsService: ButtonsService) {
    this.buttons = this.buttonsService.getButtons();
  }
}
