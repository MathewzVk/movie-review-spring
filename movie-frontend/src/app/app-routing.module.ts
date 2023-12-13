import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ReviewComponent } from './components/review/review.component';
import { TrailerComponent } from './components/trailer/trailer.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'review/:imdbId', component: ReviewComponent},
  {path: 'trailer/:imdbId', component: TrailerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
