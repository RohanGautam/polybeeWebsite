import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { NbMenuItem, NbSidebarService } from '@nebular/theme';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'polybeeWebsite';
  sideBarShown = false;

  constructor(private sidebarService: NbSidebarService) {}

  ngOnInit() {
    AOS.init();
  }

  toggleSidebar() {
    this.sidebarService.toggle(false, 'right-sidebar');
    this.sideBarShown = !this.sideBarShown;
  }
  scroll(el: HTMLElement) {
    el.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}
