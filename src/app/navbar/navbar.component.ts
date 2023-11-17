import { Component, OnInit } from '@angular/core';

declare const M: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  private Materialize: any;

  ngOnInit() {
    this.Materialize = M;

    document.addEventListener('DOMContentLoaded', () => {
      const elems = document.querySelectorAll('.sidenav');
      const instances = this.Materialize.Sidenav.init(elems, {});
    });
  }
}
