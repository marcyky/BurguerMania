import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Para usar ngModel
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {
  @Input() label: string = '';      // Rótulo para o campo de entrada
  @Input() placeholder: string = ''; // Texto que aparece no campo quando vazio
  @Input() type: string = '';   // Tipo do campo (text, password, etc.)
  @Input() value: string = '';      // Valor inicial do input
  @Input() required: boolean = false; // Se o campo é obrigatório
}
