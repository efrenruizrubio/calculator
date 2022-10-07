import { Component, OnInit } from '@angular/core';
import { ResultService } from '@services/result.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
})
export class ResultComponent /*  implements OnInit */ {
  result: number;
  constructor(private resultService: ResultService) {
    this.result = this.resultService.getResult();
  }
  /*
  ngOnInit(): void {
  } */
}
