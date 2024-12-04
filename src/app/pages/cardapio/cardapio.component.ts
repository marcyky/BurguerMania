import { Component, inject, Input } from '@angular/core';
import { CardComponent } from "../../components/card/card.component";
import { ItemInterface } from '../../interfaces/item-interface';
import { CommonModule } from '@angular/common';
import { ItemService } from '../../services/item.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cardapio',
  standalone: true,
  imports: [CardComponent, CommonModule, RouterModule],
  templateUrl: './cardapio.component.html',
  styleUrl: './cardapio.component.css'
})
export class CardapioComponent {
  @Input() itemData!: ItemInterface;
  itensList: ItemInterface[] = [];
  itemService: ItemService = inject(ItemService);

  constructor() {
    this.itensList = this.itemService.getAllItens();
  }
}
