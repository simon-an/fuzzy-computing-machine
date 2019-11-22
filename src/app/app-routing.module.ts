import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminGuard} from '~core/guards/admin.guard';
import {AuthGuard} from '~core/guards/auth.guard';


const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () => import('./views/admin/admin.module').then(m => m.AdminModule),
    canLoad: [AdminGuard],
    canActivate: [AuthGuard, AdminGuard]
  },
  {
    path: 'user',
    loadChildren: () => import('./views/user/user.module').then(m => m.UserModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'home',
    loadChildren: () => import('./views/home/home.module').then(m => m.HomeModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
