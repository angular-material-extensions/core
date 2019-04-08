import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { LibComponent } from './component/lib.component';


// Export module's public API
export { LibComponent } from './component/lib.component';


@NgModule({
  imports: [
    CommonModule
  ],
  exports: [LibComponent],
  declarations: [LibComponent]
})
export class MatCoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: MatCoreModule,
      providers: []
    };
  }
}
