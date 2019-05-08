import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {DialogsComponent} from './dialogs.component';

@NgModule({
  imports: [RouterModule.forChild([
    {path: '', component: DialogsComponent}
  ])],
  exports: [RouterModule]
})
export class DialogsRoutingModule {
}
