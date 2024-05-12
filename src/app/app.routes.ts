import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent : () => import('./pages/home/home.component'),
    },
    {
        path: 'article/:slug',
        loadComponent: () => import('./pages/article/article.component')
    }
];
