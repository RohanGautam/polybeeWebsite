import { Component, OnInit, AfterViewInit, HostBinding } from '@angular/core';
import * as AOS from 'aos';
import { NbSidebarService } from '@nebular/theme';
import { fromEvent } from 'rxjs';
import {
  throttleTime,
  map,
  pairwise,
  distinctUntilChanged,
  filter,
  share,
} from 'rxjs/operators';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

enum Direction {
  Up = 'Up',
  Down = 'Down',
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('toggle', [
      state('showHeader', style({ opacity: 1 })),
      state('hideHeader', style({ opacity: 0 })),
      transition('showHeader <=> hideHeader', [animate('200ms')]),
    ]),
  ],
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'polybeeWebsite';
  sideBarShown = false;
  headerShown = true;

  constructor(private sidebarService: NbSidebarService) {}

  ngOnInit() {
    AOS.init();
  }
  ngAfterViewInit() {
    // setting up observbles to listen for up/down scroll events
    const scroll$ = fromEvent(window, 'scroll').pipe(
      throttleTime(10),
      map(() => window.pageYOffset),
      pairwise(),
      map(([y1, y2]): Direction => (y2 < y1 ? Direction.Up : Direction.Down)),
      distinctUntilChanged(),
      share()
    );
    // scroll$.subscribe((v) => console.log(v));
    const scrollUp$ = scroll$.pipe(
      filter((direction) => direction === Direction.Up)
    );

    const scrollDown$ = scroll$.pipe(
      filter((direction) => direction === Direction.Down)
    );

    scrollDown$.subscribe((_) => {
      this.headerShown = false;
    });
    scrollUp$.subscribe((_) => {
      this.headerShown = true;
    });
  }

  toggleSidebar() {
    this.sidebarService.toggle(false, 'right-sidebar');
    this.sideBarShown = !this.sideBarShown;
  }

  scroll(el: HTMLElement) {
    // @todo center doest work as well on mobile
    el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    this.toggleSidebar();
  }
}
