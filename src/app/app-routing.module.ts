import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'toc',
    loadChildren: () => import('./toc/toc.module').then(m => m.TocPageModule)
  },
  {
    path: 'content',
    loadChildren: () => import('./content/content.module').then(m => m.ContentPageModule)
  },
  // Add any additional routes here
  // Example: path to a specific content page with a dynamic segment
  {
    path: 'content/:id', // assuming you have a dynamic segment for specific pages
    loadChildren: () => import('./content/content.module').then(m => m.ContentPageModule)
  },
  {
    path: 'aboutapp',
    loadChildren: () => import('./aboutapp/aboutapp.module').then( m => m.AboutappPageModule)
  },
  // ... other routes for additional pages or features
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
