import { ProjectService } from '../../services/project/project.service';
import { PostService } from '../../services/post/post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  posts: Array<any>;
  projects: Array<any>;

  constructor(private postService: PostService, private projectService: ProjectService) { }

  ngOnInit() {
    this.postService.getAll().subscribe(
      data => {
        this.posts = data;
      },
      error => console.error(error)
    );

    this.projectService.getAll().subscribe(
      data => {
        this.projects = data;
      },
      error => console.error(error)
    );
  }

}
