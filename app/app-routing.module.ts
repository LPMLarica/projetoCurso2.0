import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { ChamadoCreateComponent } from './component/chamado/chamado-create/chamado-create.component';
import { ChamadoListComponent } from './component/chamado/chamado-list/chamado-list.component';
import { ChamadoReadComponent } from './component/chamado/chamado-read/chamado-read.component';
import { ChamadoUpdateComponent } from './component/chamado/chamado-update/chamado-update.component';
import { ClienteCreateComponent } from './component/cliente/cliente-create/cliente-create.component';
import { ClienteDeleteComponent } from './component/cliente/cliente-delete/cliente-delete.component';
import { ClienteListComponent } from './component/cliente/cliente-list/cliente-list.component';
import { ClienteUpdateComponent } from './component/cliente/cliente-update/cliente-update.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { NavComponent } from './component/nav/nav.component';
import { TecnicoCreateComponent } from './component/tecnico/tecnico-create/tecnico-create.component';
import { TecnicoDeleteComponent } from './component/tecnico/tecnico-delete/tecnico-delete.component';
import { TecnicoListComponent } from './component/tecnico/tecnico-list/tecnico-list.component';
import { TecnicoUpdateComponent } from './component/tecnico/tecnico-update/tecnico-update.component';

const routes: Routes = [
    { path: 'login', component: LoginComponent },
    {
        path: '', component: NavComponent, canActivate: [AuthGuard], children: [
            { path: 'home', component: HomeComponent },

            { path: 'tecnicos',            component:   TecnicoListComponent },
            { path: 'tecnicos/create',     component: TecnicoCreateComponent },
            { path: 'tecnicos/update/:id', component: TecnicoUpdateComponent },
            { path: 'tecnicos/delete/:id', component: TecnicoDeleteComponent },

            { path: 'clientes',            component:   ClienteListComponent },
            { path: 'clientes/create',     component: ClienteCreateComponent },
            { path: 'clientes/update/:id', component: ClienteUpdateComponent },
            { path: 'clientes/delete/:id', component: ClienteDeleteComponent },

            { path: 'chamados',                       component:     ChamadoListComponent },
            { path: 'chamados/create',                component:   ChamadoCreateComponent },
            { path: 'chamados/update/:id',            component:   ChamadoUpdateComponent },
            { path: 'chamados/read/:id',              component:     ChamadoReadComponent },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
