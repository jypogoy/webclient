import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
  inputs: ['totalItems'],
  outputs: ['pageChanged']
})
export class PaginationComponent implements OnInit {
  
  pageChanged = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  paginate(page: string) {
    this.pageChanged.emit(page);
  }

}
