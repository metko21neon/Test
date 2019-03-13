import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PostComponent} from './views/post/post.component';
import {PostDetailsComponent} from './views/post-details/post-details.component';
import {PostCreateComponent} from './views/post-create/post-create.component';

const routes: Routes = [
  {path: 'posts', component: PostComponent},
  {path: 'post/:id', component: PostDetailsComponent},
  {path: 'posts/create', component: PostCreateComponent},
  { path: '',   redirectTo: 'posts', pathMatch: 'full' },
  { path: '**', redirectTo: 'posts' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
