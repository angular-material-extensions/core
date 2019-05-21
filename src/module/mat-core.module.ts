import {CommonModule} from '@angular/common';
import {ModuleWithProviders, NgModule} from '@angular/core';

import {MatSplashScreenService} from './services/splash/mat-splash-screen.service';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatButtonModule, MatMenuModule} from '@angular/material';


// Export module's public API
export {MatSplashScreenService} from './services/splash/mat-splash-screen.service';
export {MatDialogsModule} from './components/dialogs/mat-dialogs.module';
export {MatAlertDialog, MatAlertDialogData, AlertType} from './components/dialogs/mat-alert-dialog/mat-alert-dialog.component';
export {MatAsyncDialog, MatAsyncDialogData} from './components/dialogs/mat-async-dialog/mat-async-dialog.component';
export {MatConfirmDialog, MatConfirmDialogData} from './components/dialogs/mat-confirm-dialog/mat-confirm-dialog.component';
export {MatInputDialog, MatInputDialogData} from './components/dialogs/mat-input-dialog/mat-input-dialog.component';
export {MatLoadingDialog, MatLoadingDialogData} from './components/dialogs/mat-loading-dialog/mat-loading-dialog.component';
export {MatRadioDialog, MatRadioDialogData} from './components/dialogs/mat-radio-dialog/mat-radio-dialog.component';
export {MatSelectDialog, MatSelectDialogData} from './components/dialogs/mat-select-dialog/mat-select-dialog.component';
export {MatTimerDialog} from './components/dialogs/mat-timer-dialog/mat-timer-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatButtonModule,
    MatMenuModule
    // MatDialogModule
  ],
  exports: [],
  entryComponents: [],
  declarations: [],
})
export class MatCoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: MatCoreModule,
      providers: [MatSplashScreenService]
    };
  }
}
