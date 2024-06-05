import { Component } from '@angular/core';

@Component({
  selector: 'lakaypam-property',
  standalone: true,
  imports: [],
  templateUrl: './property.component.html',
  styleUrl: './property.component.scss'
})
export class PropertyComponent {
  categories: string[] = ["nature", "things", "cats", "landscapes", "beaches"];
  selectedCategory = ""

  ngAfterViewInit(): void {
    this.getRandomCategory()
  }

  getRandomCategory() {
    const randomIndex = Math.floor(Math.random() * this.categories.length);
    this.selectedCategory = this.categories[randomIndex];
  }
}
