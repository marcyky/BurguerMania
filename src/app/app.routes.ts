import { Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import { CardapioComponent } from './pages/cardapio/cardapio.component';
import { PedidoComponent } from './pages/pedido/pedido.component';
import { ProdutoComponent } from './pages/produto/produto.component';

export const routes: Routes = [
    { path: '', component: HomeComponent, title: 'Home' },
    { path: 'cardapio', component: CardapioComponent, title: 'Cardapio' },
    { path: 'pedido', component: PedidoComponent, title: 'Pedido' },
    { path: 'produto/:id', component: ProdutoComponent, title: 'Produto' }
];
