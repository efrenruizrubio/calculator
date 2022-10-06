import { Component, Input } from '@angular/core';
import { Button } from '@models/index';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() button: Button = { type: '', name: '' };
  constructor() {}
}
