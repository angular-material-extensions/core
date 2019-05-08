import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'getting-started',
        loadChildren: 'app/getting-started/getting-started.module#GettingStartedModule'
    },
  {
        path: 'dialogs',
        loadChildren: 'app/features/dialogs/dialogs.module#DialogsModule'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
