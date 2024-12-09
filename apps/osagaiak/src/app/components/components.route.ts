import { Routes } from '@angular/router';

export const COMPONENTS_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./components.component').then((x) => x.ComponentsComponent),
    children: [
      {
        path: 'dialog',
        loadComponent: () =>
          import('./dialog/dialog.component').then((x) => x.DialogComponent),
      },
      {
        path: '**',
        redirectTo: 'dialog',
      },
    ],
  },
];
