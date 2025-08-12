import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { MainContentComponent } from '../main-content/main-content.component';
import { SideNavMenuComponent } from '../side-nav-menu/side-nav-menu.component';
@Component({
  selector: 'app-layout',
  imports: [HeaderComponent,SideNavMenuComponent,MainContentComponent,FooterComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

}
