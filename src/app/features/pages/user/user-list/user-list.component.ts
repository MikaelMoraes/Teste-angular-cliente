import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ClienteService } from '../../../../core/services/cliente.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { MoleculeTablesComponent, MoleculeDialogComponent } from '../../../../shared/components/molecules';
import { AtomButtonComponent, AtomPreloaderComponent } from "../../../../shared/components/atoms";
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { LoadingService } from '../../../../core/services/loading.service';


interface Cliente {
  id: number;
  nome: string;
  email: string;
  telefone?: string;
  endereco: {
    cep: string;
    cidade: string;
    estado: string;
    numero: string;
    rua: string;
  };
}

@Component({
  selector: 'app-user-list',
  standalone: true,
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MoleculeTablesComponent,
    MatIconModule,
    MatButtonModule,
    AtomButtonComponent,
    TranslateModule,
    AtomPreloaderComponent
],
})
export class UserListComponent implements OnInit {
  dataSource: Cliente[] = [];
  columns: any[] = [];
  @ViewChild('userDetailTemplate') userDetailTemplate!: TemplateRef<any>;
  loading: any;
  constructor(
    private router: Router,
    private dialog: MatDialog,
    private clienteService: ClienteService,
    private translate: TranslateService,
    private loadingService: LoadingService
  ) { 
 this.loading = this.loadingService.loading$;

  }


  
  ngOnInit(): void {
    this.setColumns();
    this.loadClientes();
    this.translate.onLangChange.subscribe(() => {
      this.setColumns();
    });
  }

  setColumns(): void {
    this.columns = [
      { key: 'id', label: 'clientList.columnId' },
      { key: 'nome', label: 'clientList.columnName' },
      { key: 'email', label: 'clientList.columnEmail' },
      { key: 'actions', label: 'clientList.columnActions', isAction: true }
    ];
  }

  loadClientes(): void {
    this.loadingService.show();
    this.clienteService.getClientes().subscribe({
      next: (res: any) => { this.dataSource = res; },
      complete: () => this.loadingService.hide()
    });
  }

  goToNewUser(): void {
    this.router.navigate(['/usuarios/novo']);
  }

  editUser(user: Cliente): void {
    this.router.navigate(['/usuarios/', user.id]);
  }

  deleteUser(id: number): void {
     this.loadingService.show();
    this.clienteService.deleteCliente(id).subscribe({
      next: () => {
        this.loadClientes();
      },
      error: (err) => {
        console.error('Erro ao deletar usuário:', err);
      }
    });
  }

  openDialogView(user: Cliente): void {
    this.dialog.open(MoleculeDialogComponent, {
      width: '600px',
      data: {
        title: this.translate.instant('clientList.viewDialogTitle'),
        contentTemplate: this.userDetailTemplate,
        context: { user },
        confirmText: this.translate.instant('clientList.closeButton'),
        showCancelButton: false
      }
    });
  }

  openDialogDelete(user: Cliente): void {
    const content = this.translate.instant('clientList.confirmDeleteMessage', { name: user.nome });

    this.dialog.open(MoleculeDialogComponent, {
      width: '400px',
      data: {
        title: this.translate.instant('clientList.deleteDialogTitle'),
        content,
        confirmText: this.translate.instant('clientList.confirmButton'),
        cancelText: this.translate.instant('clientList.cancelButton'),
      }
    }).afterClosed().subscribe(result => {
      if (result) {
        this.deleteUser(user.id);
      }
    });
  }
}
