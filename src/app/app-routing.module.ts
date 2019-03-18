import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfluencersListComponent } from './influencers-list/influencers-list.component';

const routes: Routes = [
  { path: '', component: InfluencersListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
