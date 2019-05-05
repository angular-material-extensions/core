import {Component, Inject, OnInit, Optional} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

export interface MatInputDialogData {
  title?: string;
  icon?: string;
  type?: string;
  message: string;
  okTextButton?: string;
}

@Component({
  selector: 'mat-input-dialog',
  templateUrl: './mat-input-dialog.component.html',
  styleUrls: ['./mat-input-dialog.component.scss']
})
export class MatInputDialog implements OnInit {

  constructor(public dialogRef: MatDialogRef<MatInputDialog>,
              @Optional() @Inject(MAT_DIALOG_DATA) public data: MatInputDialogData) {
  }

  ngOnInit() {
  }

}
