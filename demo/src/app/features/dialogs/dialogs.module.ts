import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DialogsComponent} from './dialogs.component';
import {MatDialogsModule} from '@angular-material-extensions/core';
import {AppSharedModule} from '../../shared';
import {MatButtonModule, MatCardModule} from '@angular/material';
import {MarkdownModule} from 'ngx-markdown';
import {DialogsRoutingModule} from './dialogs-routing.module';

@NgModule({
  declarations: [DialogsComponent],
  imports: [
    CommonModule,
    MarkdownModule.forChild(),
    AppSharedModule,
    DialogsRoutingModule,
    MatDialogsModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class DialogsModule {
}
