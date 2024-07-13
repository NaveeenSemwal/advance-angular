import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfANDfromComponent } from './of-andfrom.component';

describe('OfANDfromComponent', () => {
  let component: OfANDfromComponent;
  let fixture: ComponentFixture<OfANDfromComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OfANDfromComponent]
    });
    fixture = TestBed.createComponent(OfANDfromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
