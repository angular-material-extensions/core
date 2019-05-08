import {Component, Inject, OnInit, Optional} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef, ThemePalette} from '@angular/material';

export interface MatRadioDialogDialogData {
  title?: string;
  icon?: string;
  color?: ThemePalette;
  data: {
    value: any;
    options: { value: any; label: any }[];
  }
}

@Component({
  selector: 'mat-radio-dialog',
  templateUrl: './mat-radio-dialog.component.html',
  styleUrls: ['./mat-radio-dialog.component.scss']
})
export class MatRadioDialog implements OnInit {

  title: string;
  icon: string;
  color: ThemePalette;
  data: { value: any; options: { value: any; label: any }[]; };

  constructor(public dialogRef: MatDialogRef<MatRadioDialog>,
              @Optional() @Inject(MAT_DIALOG_DATA) public data: MatRadioDialogDialogData) {
  }

  ngOnInit() {
    if (this.data) {
      this.title = this.data.title ? this.data.title : 'Select';
      this.icon = this.data.icon ? this.data.icon : '';
      this.color = this.data.color ? this.data.color : 'primary';
    }
  }

}
