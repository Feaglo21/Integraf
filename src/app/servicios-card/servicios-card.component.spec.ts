import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosCardComponent } from './servicios-card.component';

describe('ServiciosCardComponent', () => {
  let component: ServiciosCardComponent;
  let fixture: ComponentFixture<ServiciosCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServiciosCardComponent]
    });
    fixture = TestBed.createComponent(ServiciosCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
