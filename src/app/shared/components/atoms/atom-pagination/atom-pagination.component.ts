import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
@Component({
  selector: 'app-atom-pagination',
  imports: [MatPaginatorModule, MatTableModule],
  templateUrl: './atom-pagination.component.html',
  styleUrl: './atom-pagination.component.scss'
})
export class AtomPaginationComponent {
  @Input() length?: number;
  @Input() pageSize?: number;
  @Input() pageSizeOptions: any;
  @Input() showFirstLastButtons?: boolean;

  @Output() pageChange = new EventEmitter<PageEvent>();

  onPageChange(event: PageEvent) {
    this.pageChange.emit(event);
  }
}
