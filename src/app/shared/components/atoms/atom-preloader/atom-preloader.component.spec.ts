import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtomPreloaderComponent } from './atom-preloader.component';

describe('AtomPreloaderComponent', () => {
  let component: AtomPreloaderComponent;
  let fixture: ComponentFixture<AtomPreloaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtomPreloaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtomPreloaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
