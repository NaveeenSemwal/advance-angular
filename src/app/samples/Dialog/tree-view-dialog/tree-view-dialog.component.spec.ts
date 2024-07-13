import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeViewDialogComponent } from './tree-view-dialog.component';

describe('TreeViewDialogComponent', () => {
  let component: TreeViewDialogComponent;
  let fixture: ComponentFixture<TreeViewDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TreeViewDialogComponent]
    });
    fixture = TestBed.createComponent(TreeViewDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
