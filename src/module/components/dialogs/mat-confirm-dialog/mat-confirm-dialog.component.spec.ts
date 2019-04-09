import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatConfirmDialog } from './mat-confirm-dialog.component';
import {STATIC_IMPORTS} from '../test/helper';
import {MatDialogRef} from '@angular/material';

describe('MatConfirmDialog', () => {
  let component: MatConfirmDialog;
  let fixture: ComponentFixture<MatConfirmDialog>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatConfirmDialog ],
      imports: [...STATIC_IMPORTS],
      providers: [{provide: MatDialogRef, useValue: {}}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatConfirmDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
