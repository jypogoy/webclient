import { ProjectService } from '../../../services/project/project.service';
import { Component, OnInit } from '@angular/core';

import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  public loading = false; // ngx-loading flag

  projects:Array<any>;
  projectsJSON = {};
  
  // Pagination objects
  defaultItemsPerPage = 10;
  defaultSortDirection: string = 'ASC';
  defaultSortField = 'id';
  totalItems: number;
  keyword: string = '';
  currentPage: number = 0;
  filterPage: number = 0;
  itemsPerPage: number = this.defaultItemsPerPage;
  sortDirection: string = this.defaultSortDirection;
  sortField: string = this.defaultSortField;
  start: number = 1;
  end: number = 0;
  showBy = [ 10, 25, 50, 100, 'All' ];

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.getProjects();
    this.countProjects();    
  }

  getProjects() {    
    this.loading = true;
    this.projectService.getAllFiltered(this.keyword, this.filterPage, this.itemsPerPage, this.sortDirection, this.sortField).subscribe(
      data => {
        this.projects = data;        
        if (this.end == 0)
          this.end = this.projects.length;
        this.loading = false;  
      },
      error => {
        console.error(error);
        this.loading = false;
      }
    );
  }

  countProjects() {
    this.projectService.count(this.keyword).subscribe(
      data => {
        this.totalItems = data;        
      },
      error => console.error(error)
    );
  }

  filter() {
    this.getProjects();
    this.countProjects();    
    this.calcShownEntries();
    this.start = 1;
    return false;
  }

  reset() {
    this.keyword = '';    
    this.itemsPerPage = this.defaultItemsPerPage;
    this.sortDirection = this.defaultSortDirection;
    this.sortField = this.defaultSortField;
    this.currentPage = 0;
    this.start = 1;
    this.getProjects();
    this.countProjects();    
    //this.calcShownEntries(); 
    return false;
  }

  changeDisplayCount() {
    if (typeof this.itemsPerPage == 'string')
      this.itemsPerPage = this.totalItems;
    this.getProjects();
    this.countProjects();    
    this.calcShownEntries();
    this.start = 1;
  }

  calcShownEntries() {
    this.start = (this.currentPage - 1) * this.itemsPerPage + 1;
    this.end = this.itemsPerPage * this.currentPage;			
    if (this.end > this.totalItems) {
      this.end = this.totalItems;
    }
  }

  pageChanged(page) {
    this.currentPage = page;
    this.filterPage = page - 1; // Must be zero-based
    this.getProjects();
    this.calcShownEntries();
  }

}
