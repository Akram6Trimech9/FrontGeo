import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacteurprofileComponent } from './facteurprofile.component';

describe('FacteurprofileComponent', () => {
  let component: FacteurprofileComponent;
  let fixture: ComponentFixture<FacteurprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacteurprofileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacteurprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
