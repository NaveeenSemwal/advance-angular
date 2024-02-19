import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputviewComponent } from './outputview.component';

describe('OutputviewComponent', () => {
  let component: OutputviewComponent;
  let fixture: ComponentFixture<OutputviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OutputviewComponent]
    });
    fixture = TestBed.createComponent(OutputviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
