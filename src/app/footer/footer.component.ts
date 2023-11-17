import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  isTargetRoute: boolean = false;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.checkRoute();
    });
  }

  private checkRoute() {
    let route = this.activatedRoute.snapshot;
    while (route.firstChild) {
      route = route.firstChild;
    }

    const isCreateMovie = route.routeConfig?.path === 'create/movie';

    const currentPath = route.params['category'];

    console.log(route.params['category'])
    this.isTargetRoute = isCreateMovie ||
      currentPath === 'favorites' ||
      currentPath === 'watchlist';
  }

  getCurrentYear(): number {
    return new Date().getFullYear();
  }
}
