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
  sidebarMenuItems: NbMenuItem[] = [
    {
      title: 'Home',
      icon: 'home-outline',
      link: '/nice',
    },
    {
      title: 'Settings',
      icon: 'settings-2-outline',
      link: '/settings',
    },
    {
      title: 'About',
      icon: 'info-outline',
    },
  ];

  constructor(private sidebarService: NbSidebarService) {}

  ngOnInit() {
    AOS.init();
  }

  toggleSidebar() {
    this.sidebarService.toggle(false, 'right-sidebar');
    this.sideBarShown = !this.sideBarShown;
  }
}
