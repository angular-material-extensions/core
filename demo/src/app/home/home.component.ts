import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Title} from '@angular/platform-browser';
import sdk from '@stackblitz/sdk';
import {MatDialog} from '@angular/material';
import {MatAlertDialog, MatAlertDialogData, MatConfirmDialog, MatConfirmDialogData} from '@angular-material-extensions/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  // private _matConfirmDialogRef: MatDialogRef;

  constructor(private titleService: Title,
              public dialog: MatDialog) {
  }

  ngOnInit() {
    this.titleService.setTitle('@angular-material-extensions/core');
  }

  editOnStackBlitz() {
    sdk.openGithubProject('angular-material-extensions/core/tree/master/demo');
  }

  openAlertDialog() {
    const matAlertDialogData: MatAlertDialogData = {
      message: 'Are you sure you want to execute the following action ?'
    };

    this.dialog
      .open(MatAlertDialog, {data: matAlertDialogData})
      .afterClosed()
      .subscribe((confirmed: boolean) => console.log('confirmed -> ', confirmed));

  }

  openConfirmDialog() {
    const matConfirmDialogData: MatConfirmDialogData = {
      confirmMessage: 'Are you sure you want to execute the following action ?'
    };

    this.dialog
      .open(MatConfirmDialog, {data: matConfirmDialogData})
      .afterClosed()
      .subscribe((confirmed: boolean) => console.log('confirmed -> ', confirmed));

  }
}
