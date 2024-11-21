import { Component } from '@angular/core';
import {InputComponent} from '../../components/input/input.component';
import { FormsModule } from '@angular/forms';  // Para usar ngModel
import { CommonModule } from '@angular/common';
import { BotaoComponent } from "../../components/botao/botao.component";

@Component({
  selector: 'app-pedido',
  standalone: true,
  imports: [InputComponent, FormsModule, CommonModule, BotaoComponent],
  templateUrl: './pedido.component.html',
  styleUrl: './pedido.component.css'
})
export class PedidoComponent {
  formData = {
    produto: '',
    quantidade: '',
    observacao: ''
  };
}
