import { Component, OnInit } from '@angular/core';
import { Pedido } from '../../../models/pedidos.model';
import { PedidoService } from '../../../services/pedidos.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-pedido-form',
    templateUrl: './pedidos-form.component.html',
    styleUrls: ['./pedidos-form.component.css']
})
export class PedidosFormComponent implements OnInit {

    pedido: Pedido = new Pedido();

    constructor(
        private pedidoService: PedidoService,
        private router: Router
    ) { }

    ngOnInit(): void { }

    save(): void {
        this.pedidoService.create(this.pedido).subscribe(
            () => {
                this.router.navigate(['/pedidos']);
            },
            error => console.error('Erro ao salvar pedido', error)
        );
    }
}
