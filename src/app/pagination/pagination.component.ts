import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {
  @Input() currentPage: number = 1;
  @Input() totalPages: number = 1;
  @Output() pageChange: EventEmitter<number> = new EventEmitter();

  incrementPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage += 1;
      this.pageChange.emit(this.currentPage);
    }
  }

  decrementPage() {
    if (this.currentPage > 1) {
      this.currentPage -= 1;
      this.pageChange.emit(this.currentPage);
    }
  }
}
