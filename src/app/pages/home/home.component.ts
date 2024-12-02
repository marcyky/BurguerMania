import { Component } from '@angular/core';
import { BotaoComponent } from "../../components/botao/botao.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BotaoComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private router: Router) {}

  navegarParaPedido() {
    this.router.navigate(['/pedido']);
  }
}
