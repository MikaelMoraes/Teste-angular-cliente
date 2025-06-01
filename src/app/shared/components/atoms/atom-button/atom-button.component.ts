import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-atom-button',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule, MatTooltipModule],
  templateUrl: './atom-button.component.html',
})
export class AtomButtonComponent {
  @Input() icon?: string;
  @Input() label?: string;
  @Input() color: 'primary' | 'accent' | 'warn' | undefined;
  @Input() tooltip?: string;
  @Input() iconButton?: boolean = false;
  @Input() size: 'small' | 'medium' | 'large' = 'medium';

  @Output() clicked = new EventEmitter<void>();
  getSizeClass() {
    return {
      'btn-small': this.size === 'small',
      'btn-large': this.size === 'large',
      // 'btn-medium' opcional, se quiser aplicar algo específico
    };
  }
  onClick() {
    this.clicked.emit();
  }
}

