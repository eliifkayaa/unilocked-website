// button.service.ts

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ButtonService {
  private buttonName: string;

  setButtonName(name: string): void {
    this.buttonName = name;
  }

  getButtonName(): string {
    return this.buttonName;
  }
}
