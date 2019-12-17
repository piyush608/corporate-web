import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'speaker',
    loadChildren: () => import('./speaker/speaker.module').then( m => m.SpeakerPageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./contact/contact.module').then( m => m.ContactPageModule)
  },
  {
    path: 'program',
    loadChildren: () => import('./program/program.module').then( m => m.ProgramPageModule)
  },
  {
    path: 'tours',
    loadChildren: () => import('./tours/tours.module').then( m => m.ToursPageModule)
  },
  {
    path: 'faculty',
    loadChildren: () => import('./faculty/faculty.module').then( m => m.FacultyPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
