import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent : () => import('./pages/home/home.component'),
    },
    {
        path: 'hero',
        loadComponent : () => import('./pages/home/components/hero/hero.component'),
    }
];
