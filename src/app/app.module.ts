import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostComponent } from './views/post/post.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material';
import {HttpClientModule} from '@angular/common/http';
import { CommentsDialogComponent } from './views/comments-dialog/comments-dialog.component';
import { AuthorDialogComponent } from './views/author-dialog/author-dialog.component';
import { PostDetailsComponent } from './views/post-details/post-details.component';
import { PostCreateComponent } from './views/post-create/post-create.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    CommentsDialogComponent,
    AuthorDialogComponent,
    PostDetailsComponent,
    PostCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  entryComponents: [
    CommentsDialogComponent,
    AuthorDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
