import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomifComponent } from './customif.component';

describe('CustomifComponent', () => {
  let component: CustomifComponent;
  let fixture: ComponentFixture<CustomifComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomifComponent]
    });
    fixture = TestBed.createComponent(CustomifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
