import { Component } from '@angular/core';
import { PropertyComponent } from '../property/property.component';

@Component({
  selector: 'lakaypam-property-list',
  standalone: true,
  imports: [PropertyComponent],
  templateUrl: './property-list.component.html',
  styleUrl: './property-list.component.scss'
})
export class PropertyListComponent {

}
