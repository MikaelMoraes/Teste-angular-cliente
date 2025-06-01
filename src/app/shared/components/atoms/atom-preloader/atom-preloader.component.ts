import { Component } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-atom-preloader',
  standalone: true,
  imports: [MatProgressSpinnerModule, CommonModule],
  templateUrl: './atom-preloader.component.html',
  styleUrls: ['./atom-preloader.component.scss']
})
export class AtomPreloaderComponent {}
