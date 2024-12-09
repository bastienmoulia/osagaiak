import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import('./home/home.component').then((x) => x.HomeComponent),
  },
  {
    path: 'components',
    loadChildren: () =>
      import('./components/components.route').then((x) => x.COMPONENTS_ROUTES),
  },
];
