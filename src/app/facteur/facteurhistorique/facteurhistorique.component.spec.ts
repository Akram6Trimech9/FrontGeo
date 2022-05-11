import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacteurhistoriqueComponent } from './facteurhistorique.component';

describe('FacteurhistoriqueComponent', () => {
  let component: FacteurhistoriqueComponent;
  let fixture: ComponentFixture<FacteurhistoriqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacteurhistoriqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacteurhistoriqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
