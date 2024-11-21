import { Component } from '@angular/core';
import { BotaoComponent } from "../../components/botao/botao.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BotaoComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
