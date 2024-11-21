import { Component, Input } from '@angular/core';
import { ItemInterface } from '../../interfaces/item-interface';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() itemData!:ItemInterface;
}
