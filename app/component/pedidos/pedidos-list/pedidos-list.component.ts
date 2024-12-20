import { Component, OnInit } from '@angular/core';
import { PedidoService } from '../../../services/pedidos.service';
import { Pedido } from '../../../models/pedidos.model';

@Component({
    selector: 'app-pedido-list',
    templateUrl: './pedidos-list.component.html',
    styleUrls: ['./pedidos-list.component.css']
})
export class PedidosListComponent implements OnInit {

    pedidos: Pedido[] = [];

    constructor(private pedidoService: PedidoService) { }

    ngOnInit(): void {
        this.loadPedidos();
    }

    loadPedidos(): void {
        this.pedidoService.getAll().subscribe(
            data => this.pedidos = data,
            error => console.error('Erro ao carregar pedidos', error)
        );
    }
}
