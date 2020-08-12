import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '@modules/home/home.component';
import { UserDetailsComponent } from '@modules/user-details/user-details.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { reuse: true }
  },
  {
    path: '/:id',
    component: UserDetailsComponent,
  },
  { path: '**', redirectTo: '/not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
