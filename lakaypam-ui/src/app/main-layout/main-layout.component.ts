import { Component } from '@angular/core';
import { SearchInputComponent } from '../search-input/search-input.component';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'lakaypam-main-layout',
  standalone: true,
  imports: [SearchInputComponent, NavbarComponent],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss'
})
export class MainLayoutComponent {

}
