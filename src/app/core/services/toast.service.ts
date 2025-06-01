import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  constructor(private snackBar: MatSnackBar) {}

  success(message: string, action: string = 'Fechar', duration: number = 3000) {
    this.show(message, action, duration, ['toast-success']);
  }

  error(message: string, action: string = 'Fechar', duration: number = 3000) {
    this.show(message, action, duration, ['toast-error']);
  }

  private show(
    message: string,
    action: string,
    duration: number,
    panelClass: string[]
  ) {
    const config: MatSnackBarConfig = {
      duration,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass,
    };

    this.snackBar.open(message, action, config);
  }
}
