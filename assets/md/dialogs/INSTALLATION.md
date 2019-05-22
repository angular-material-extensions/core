# Installation

install `@angular-material-extensions/core` via:
```shell
npm install --save @angular-material-extensions/core
```

## Import the library

Once installed you need to import the main module:
```js
import { MatDialogsModule } from '@angular-material-extensions/core';
```
The only remaining part is to list the imported module in your application module. The exact method will be slightly
different for the root (top-level) module for which you should end up with the code similar to (notice ` MatPasswordStrengthModule .forRoot()`):
```js
import { MatDialogsModule } from '@angular-material-extensions/core';
import { MatDialogModule } from '@angular/material';

@NgModule({
  declarations: [AppComponent, ...],
  imports: [
    MatDialogsModule,
    MatDialogModule,
     ...],  
  bootstrap: [AppComponent]
})
export class AppModule {
  
  constructor(public dialog: MatDialog) {
    }
}
```
