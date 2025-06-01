import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AtomButtonComponent, AtomInputComponent, AtomPreloaderComponent } from '../../../../shared/components/atoms';
import { ClienteService } from '../../../../core/services/cliente.service';
import { ToastService } from '../../../../core/services/toast.service';
import { CommonModule, Location } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { LoadingService } from '../../../../core/services/loading.service';

@Component({
  selector: 'app-user-create',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AtomButtonComponent,
    AtomInputComponent,
    TranslateModule,
    AtomPreloaderComponent
  ],
  templateUrl: './user-create.component.html',
  styleUrl: './user-create.component.scss'
})
export class UserCreateComponent implements OnInit {
  form!: FormGroup;
  isEditMode = false
  id: any
  loading: any;
  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private cliente: ClienteService,
    private toast: ToastService,
    private location: Location,
    private loadingService: LoadingService
  ) { this.loading = this.loadingService.loading$; }

  ngOnInit(): void {
    this.form = this.fb.group({
      nome: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      telefone: [''],
      endereco: this.fb.group({
        rua: ['', Validators.required],
        numero: ['', Validators.required],
        cidade: ['', Validators.required],
        estado: ['', Validators.required],
        cep: ['', Validators.required]
      })
    });
    this.route.paramMap.subscribe(params => {
      this.id = Number(params.get('id'));
      if (this.id) {
        this.isEditMode = true;
        this.loadCliente(this.id)
      }
    });
  }

  submit(): void {
    if (!this.form.valid) {
      this.toast.error('Preencha todos os campos!');
    }
    if (this.form.valid && !this.isEditMode) {
      this.loadingService.show();
      const cliente = this.form.value;
      this.cliente.addCliente(this.form.value).subscribe({
        next: (res) => {
          this.back()
          this.loadingService.hide();
          this.toast.success('Cliente cadastrado com sucesso!');

        },
        error: (err) => {
          this.toast.error('Erro ao cadastradar cliente!');

        }
      });

    }

    if (this.form.valid && this.isEditMode) {
      this.loadingService.show();
      const cliente = { ...this.form.value, id: this.id }
      this.cliente.updateCliente(this.id, cliente).subscribe({
        next: (res) => {
          this.back()
          this.loadingService.hide();
          this.toast.success('Cliente atualizado com sucesso!');
        },
        error: (err) => {
          this.toast.error('Erro ao atualizar cliente!');
        }
      });

    }
  }

  loadCliente(id: number): void {
    this.loadingService.show();
    this.cliente.getCliente(id).subscribe({
      next: (cliente) => {
        this.form.patchValue(cliente);
        this.loadingService.hide();
      },
      error: (err) => {
        this.toast.error('Erro ao carregar cliente!');

      }
    });
  }


  back() {
    this.location.back();
  }
}