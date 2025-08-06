import { Component, HostListener  } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'dev-2025';
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
