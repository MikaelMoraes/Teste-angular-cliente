import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoleculeTablesComponent } from './molecule-tables.component';

describe('MoleculeTablesComponent', () => {
  let component: MoleculeTablesComponent;
  let fixture: ComponentFixture<MoleculeTablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoleculeTablesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoleculeTablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
