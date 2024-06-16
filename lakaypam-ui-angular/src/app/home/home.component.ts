import { Component } from '@angular/core';
import { PropertyListComponent } from '../property-list/property-list.component';

@Component({
  selector: 'lakaypam-home',
  standalone: true,
  imports: [PropertyListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
