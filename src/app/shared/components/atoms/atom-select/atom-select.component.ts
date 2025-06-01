import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-atom-select',
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule],
  templateUrl: './atom-select.component.html',
  styleUrl: './atom-select.component.scss'
})
export class AtomSelectComponent {
  @Input() label: string = 'Selecione';
  @Input() options: { value: any, label: string }[] = [];
  @Input() value: any;
  @Output() valueChange = new EventEmitter<any>();

  onSelectionChange(value: any) {
    this.valueChange.emit(value);
  }
}
