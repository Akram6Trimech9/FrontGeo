import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoauthLayoutComponent } from './noauth-layout.component';

describe('NoauthLayoutComponent', () => {
  let component: NoauthLayoutComponent;
  let fixture: ComponentFixture<NoauthLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoauthLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoauthLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
