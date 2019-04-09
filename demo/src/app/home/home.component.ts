import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Title} from '@angular/platform-browser';
import sdk from '@stackblitz/sdk';
import {MatDialog, MatDialogRef} from '@angular/material';
import {MatConfirmDialog, MatConfirmDialogData} from '@angular-material-extensions/core';

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
    this.titleService.setTitle('Home | core');
  }

  editOnStackBlitz() {
    sdk.openGithubProject('angular-material-extensions/core/tree/master/demo');
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
