import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoArgProComponent } from './logo-arg-pro.component';

describe('LogoArgProComponent', () => {
  let component: LogoArgProComponent;
  let fixture: ComponentFixture<LogoArgProComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LogoArgProComponent]
    });
    fixture = TestBed.createComponent(LogoArgProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
