import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtomPaginationComponent } from './atom-pagination.component';

describe('AtomPaginationComponent', () => {
  let component: AtomPaginationComponent;
  let fixture: ComponentFixture<AtomPaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtomPaginationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtomPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
