import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacteurInterfaceComponent } from './facteur-interface.component';

describe('FacteurInterfaceComponent', () => {
  let component: FacteurInterfaceComponent;
  let fixture: ComponentFixture<FacteurInterfaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacteurInterfaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacteurInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
