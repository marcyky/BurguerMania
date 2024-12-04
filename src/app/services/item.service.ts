import { Injectable } from '@angular/core';
import { ItemInterface } from '../interfaces/item-interface';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  itensList: ItemInterface[] = [
    {
      "id": 1,
      "titulo": "Cheddar e bacon",
      "descricao": "pão de batata, duas carnes, queijo cheddar cremoso e bacon crocante.",
      "ingredientes": "",
      "image": "lanche1.jpg",
      "preco": 20
    },
    {
      "id": 2,
      "titulo": "X-salada",
      "descricao": "pão com gergelim, carne, queijo e salada.",
      "ingredientes": "" ,
      "image": "lanche2.jpg",
      "preco": 20
    },
    {
      "id": 3,
      "titulo": "Frango empanado",
      "descricao": "pão de batata, frango empanado, picles e molho especial.",
      "ingredientes": "" ,
      "image": "lanche3.jpg",
      "preco": 25
    },
    {
      "id": 4,
      "titulo": "Combo",
      "descricao": "sanduiche, coca-cola e batata frita.",
      "ingredientes": "" ,
      "image": "combo.jpg",
      "preco": 40
    }
  ]

  constructor() { }

  getAllItens(): ItemInterface[] {
    return this.itensList;
  }

  getItemById(id: number): ItemInterface | undefined {
    return this.itensList.find(item => item.id === id);
  }
}
