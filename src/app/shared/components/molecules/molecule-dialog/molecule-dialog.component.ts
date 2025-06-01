import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { TemplateRef } from '@angular/core';

export interface CustomDialogData {
  title?: string;
  content?: string;
  htmlContent?: string;
  contentTemplate?: TemplateRef<any>; // Novo campo: slot
  context?: any; // Novo campo: contexto do slot
  width?: string;
  height?: string;
  showCancelButton?: boolean;
  showConfirmButton?: boolean;
  cancelText?: string;
  confirmText?: string;
  data?: any;
}

@Component({
  selector: 'app-molecule-dialog',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule],
  templateUrl: './molecule-dialog.component.html',
  styleUrls: ['./molecule-dialog.component.scss']
})
export class MoleculeDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<MoleculeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: CustomDialogData
  ) {}

  onCancel(): void {
    this.dialogRef.close(false);
  }

  onConfirm(): void {
    this.dialogRef.close(true);
  }
}
