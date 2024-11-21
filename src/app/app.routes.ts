import { Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import { CardapioComponent } from './pages/cardapio/cardapio.component';
import { PedidoComponent } from './pages/pedido/pedido.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent, title: 'Home' },
    { path: 'cardapio', component: CardapioComponent, title: 'Cardapio' },
    { path: 'pedido', component: PedidoComponent, title: 'Pedido' }
];
