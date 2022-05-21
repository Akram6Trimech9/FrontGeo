import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdressTableComponent } from './adress-table.component';

describe('AdressTableComponent', () => {
  let component: AdressTableComponent;
  let fixture: ComponentFixture<AdressTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdressTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdressTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
