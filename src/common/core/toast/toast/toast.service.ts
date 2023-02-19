import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class Toast {
  constructor(private _snackBar: MatSnackBar) {}

  public open(message: string) {
    this._snackBar.open(message);
  }


}
