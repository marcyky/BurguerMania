import { Component, inject } from '@angular/core';
import { ItemInterface } from '../../interfaces/item-interface';
import { ActivatedRoute } from '@angular/router';
import { ItemService } from '../../services/item.service';
import { CardComponent } from "../../components/card/card.component";
import { CommonModule } from '@angular/common';
import { BotaoComponent } from "../../components/botao/botao.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-produto',
  standalone: true,
  imports: [CardComponent, CommonModule, BotaoComponent],
  templateUrl: './produto.component.html',
  styleUrl: './produto.component.css'
})
export class ProdutoComponent {
  item: ItemInterface | undefined;
  route: ActivatedRoute = inject(ActivatedRoute);
  itemService: ItemService = inject(ItemService);

  constructor(private router: Router) {
    const id = Number(this.route.snapshot.params['id']);
    this.item = this.itemService.getItemById(id);
  }

  navegarParaPedido() {
    this.router.navigate(['/pedido']);
  }
}
 
