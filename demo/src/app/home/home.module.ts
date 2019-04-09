import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from './home.component';
import {MatDialogsModule} from '@angular-material-extensions/core';
import {MatButtonModule, MatCardModule, MatDialogModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatDialogsModule,
    MatDialogModule,
    MatButtonModule,
    MatCardModule
  ],
  declarations: [HomeComponent],
})
export class HomeModule {
}
