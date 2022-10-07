import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ResultService {
  private result: number = 0;
  constructor() {}

  getResult(): number {
    return this.result;
  }
}
