import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';

@Component({
  selector: 'app-atom-input',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, NgxMaskDirective],
  providers: [provideNgxMask()],
  templateUrl: './atom-input.component.html'
})
export class AtomInputComponent {
  @Input() label!: string;
  @Input() type: string = 'text';
  @Input() control: any;
  @Input() mask: string = '';
}
