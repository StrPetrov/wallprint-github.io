import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-price-tag',
  templateUrl: './price-tag.component.html',
  styleUrls: ['./price-tag.component.scss']
})
export class PriceTagComponent {
 @Input() priceName!: string;
 @Input() priceValue!: string;
 @Input() printingSurficeFrom!: string;
 @Input() printingSurficeTo!: string;
}
