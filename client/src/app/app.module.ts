import { NgxPaginationModule } from 'ngx-pagination';

import { ProjectService } from './services/project/project.service';
import { PostService } from './services/post/post.service';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ProjectListComponent } from './components/project/project-list/project-list.component';
import { ProjectDetailComponent } from './components/project/project-detail/project-detail.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { PaginationComponent } from './components/common/pagination/pagination.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectListComponent,
    ProjectDetailComponent,
    PostListComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgxPaginationModule
  ],
  providers: [PostService, ProjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
