import { Component, ChangeDetectorRef } from '@angular/core';

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

  constructor(private cdr: ChangeDetectorRef) { }

  ngAfterViewInit(): void {
    this.getRandomCategory();
    this.cdr.detectChanges();
  }

  getRandomCategory() {
    const randomIndex = Math.floor(Math.random() * this.categories.length);
    this.selectedCategory = this.categories[randomIndex];
  }
}
