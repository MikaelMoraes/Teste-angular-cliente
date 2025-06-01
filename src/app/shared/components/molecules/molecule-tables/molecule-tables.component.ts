import { Component, ContentChild, Input, TemplateRef, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { AtomPaginationComponent } from "../../atoms/atom-pagination/atom-pagination.component";
import { PageEvent } from '@angular/material/paginator';
import { TranslateModule } from '@ngx-translate/core';
export interface TableColumn {
  key: string;
  label: string;
  isAction?: boolean;
}

@Component({
  standalone: true,
  selector: 'app-molecule-tables',
  imports: [CommonModule, MatTableModule, AtomPaginationComponent, TranslateModule],
  templateUrl: './molecule-tables.component.html',
  styleUrl: './molecule-tables.component.scss'
})
export class MoleculeTablesComponent implements OnInit {
@Input() columns: TableColumn[] = [];
  @Input() dataSource: any[] = [];

  @ContentChild('tableActions', { static: false }) tableActionsTemplate?: TemplateRef<any>;
isLoading = true;
  pagedData: any[] = [];
  pageSize = 10;
  currentPage = 0;

  get displayedColumns(): string[] {
    return this.columns.map(c => c.key);
  }

  ngOnInit() {
    this.updatePagedData();
    
  }

  ngOnChanges(changes: any) {
    if (changes['dataSource'] && this.dataSource) {
      this.currentPage = 0; // Reinicia na primeira página
      this.updatePagedData();
    }
  }

  onPageChange(event: PageEvent) {
    this.pageSize = event.pageSize;
    this.currentPage = event.pageIndex;
    this.updatePagedData();
  }

  updatePagedData() {
    const start = this.currentPage * this.pageSize;
    const end = start + this.pageSize;
    this.pagedData = this.dataSource.slice(start, end);
  }
}
