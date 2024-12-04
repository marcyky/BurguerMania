import { Component, Input } from '@angular/core';
import { ItemInterface } from '../../interfaces/item-interface';

@Component({
  selector: 'app-produto',
  standalone: true,
  imports: [],
  templateUrl: './produto.component.html',
  styleUrl: './produto.component.css'
})
export class ProdutoComponent {
  @Input() itemData!:ItemInterface;
}
