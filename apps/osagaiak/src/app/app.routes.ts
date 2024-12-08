import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: '',
        loadComponent: () => import('./home/home.component').then(x => x.HomeComponent)
    },
    {
        path: 'components',
        loadComponent: () => import('./components/components.component').then(x => x.ComponentsComponent)
    }
];
