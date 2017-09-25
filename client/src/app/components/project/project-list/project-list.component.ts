import { ProjectService } from '../../../services/project/project.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  projects: Array<any>;
  total: number;
  //projects = [];

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.projectService.getAll().subscribe(
      data => {
        this.projects = data;
        // for (let i = 0; i <= 1000; i++) {
        //   this.projects.push("Angular " + i);
        // }

      },
      error => console.error(error)
    );
  }

}
