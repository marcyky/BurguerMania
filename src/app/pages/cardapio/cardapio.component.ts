import { Component } from '@angular/core';
import { CardComponent } from "../../components/card/card.component";
import { ItemInterface } from '../../interfaces/item-interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cardapio',
  standalone: true,
  imports: [CardComponent, CommonModule],
  templateUrl: './cardapio.component.html',
  styleUrl: './cardapio.component.css'
})
export class CardapioComponent {
  itensList: ItemInterface[] = [
    {
      "id": 1,
      "titulo": "Cheddar e bacon",
      "descricao": "pão de batata, duas carnes, queijo cheddar cremoso e bacon crocante.",
      "image": "lanche1.jpg"
    },
    {
      "id": 2,
      "titulo": "x-salada",
      "descricao": "pão com gergelim, carne, queijo e salada.",
      "image": "lanche2.jpg"
    },
    {
      "id": 3,
      "titulo": "Frango",
      "descricao": "pão de batata, frango empanado, picles e molho especial.",
      "image": "lanche3.jpg"
    },
    {
      "id": 4,
      "titulo": "Combo",
      "descricao": "x-salada, coca-cola e batata frita.",
      "image": "combo1.jpg"
    }
  ]
}
