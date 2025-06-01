import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoleculeDialogComponent } from './molecule-dialog.component';

describe('MoleculeDialogComponent', () => {
  let component: MoleculeDialogComponent;
  let fixture: ComponentFixture<MoleculeDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoleculeDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoleculeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
