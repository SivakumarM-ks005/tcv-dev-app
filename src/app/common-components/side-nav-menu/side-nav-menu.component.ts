import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-side-nav-menu',
  imports: [],
  templateUrl: './side-nav-menu.component.html',
  styleUrl: './side-nav-menu.component.scss'
})
export class SideNavMenuComponent {
 isSidebarOpen = true;
  isMobile = false;
  constructor() {
    this.checkScreenSize();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.checkScreenSize();
  }

  checkScreenSize() {
    this.isMobile = window.innerWidth <= 768; // You can adjust breakpoint
     this.isSidebarOpen = false;
  }

  toggleSidebar() {
    if (this.isMobile) {
      // Mobile behavior (toggle open/close)
      this.isSidebarOpen = !this.isSidebarOpen;
    } else {
      // Web behavior (toggle or expand/collapse based on need)
      this.isSidebarOpen = !this.isSidebarOpen;
    }
  }
}
