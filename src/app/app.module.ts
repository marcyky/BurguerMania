import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';  // Para usar ngModel
import { CommonModule } from '@angular/common';

import {AppComponent} from './app.component';
import {InputComponent} from './components/input/input.component';
import {PedidoComponent} from './pages/pedido/pedido.component';

@NgModule({
  declarations: [],
  imports: [BrowserModule, FormsModule, AppComponent, InputComponent, PedidoComponent, CommonModule],  // Importar o FormsModule para usar ngModel
  providers: [],
  bootstrap: []
})
export class AppModule {
}