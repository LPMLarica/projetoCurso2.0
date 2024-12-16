import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { FormsModule, ReactiveFormsModule } from "@angular/forms";


import { HttpClientModule } from '@angular/common/http';


import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';


import { NavComponent } from './component/nav/nav.component';
import { HomeComponent } from './component/home/home.component';
import { HeaderComponent } from './component/header/header.component';
import { TecnicoListComponent } from './component/tecnico/tecnico-list/tecnico-list.component';
import { LoginComponent } from './component/login/login.component';
import { ToastrModule } from 'ngx-toastr';
import { TecnicoCreateComponent } from './component/tecnico/tecnico-create/tecnico-create.component';
import { NgxMaskModule } from 'ngx-mask';
import { TecnicoUpdateComponent } from './component/tecnico/tecnico-update/tecnico-update.component';
import { TecnicoDeleteComponent } from './component/tecnico/tecnico-delete/tecnico-delete.component';
import { ClienteCreateComponent } from './component/cliente/cliente-create/cliente-create.component';
import { ClienteDeleteComponent } from './component/cliente/cliente-delete/cliente-delete.component';
import { ClienteListComponent } from './component/cliente/cliente-list/cliente-list.component';
import { ClienteUpdateComponent } from './component/cliente/cliente-update/cliente-update.component';
import { ChamadoListComponent } from './component/chamado/chamado-list/chamado-list.component';
import { ChamadoCreateComponent } from './component/chamado/chamado-create/chamado-create.component';
import { ChamadoUpdateComponent } from './component/chamado/chamado-update/chamado-update.component';
import { ChamadoReadComponent } from './component/chamado/chamado-read/chamado-read.component';
import {AuthInterceptorProvider} from "../interceptors/auth.interceptors";
import { cpfcnpjComponent} from './component/cpf-cnpj/cpf-cnpj.component';
import {EmailComponent} from "./component/email/email.component";
import {VerificadorNomeComponent} from "./component/verificador-nome/verificador-nome.component";

@NgModule({
    declarations: [
        AppComponent,
        NavComponent,
        HomeComponent,
        HeaderComponent,
        TecnicoListComponent,
        LoginComponent,
        TecnicoCreateComponent,
        TecnicoUpdateComponent,
        TecnicoDeleteComponent,
        ClienteCreateComponent,
        ClienteDeleteComponent,
        ClienteListComponent,
        ClienteUpdateComponent,
        ChamadoListComponent,
        ChamadoCreateComponent,
        ChamadoUpdateComponent,
        ChamadoReadComponent,
        cpfcnpjComponent,
        EmailComponent,
        VerificadorNomeComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,

        FormsModule,
        ReactiveFormsModule,

        HttpClientModule,

        MatFormFieldModule,
        MatPaginatorModule,
        MatCheckboxModule,
        MatSnackBarModule,
        MatToolbarModule,
        MatSidenavModule,
        MatButtonModule,
        MatSelectModule,
        MatInputModule,
        MatRadioModule,
        MatTableModule,
        MatIconModule,
        MatListModule,
        MatCardModule,
        ToastrModule.forRoot({
            timeOut: 4000,
            closeButton: true,
            progressBar: true
        }),
        NgxMaskModule.forRoot()
    ]
    ,
    providers: [
    AuthInterceptorProvider,
],

    bootstrap: [AppComponent]
})
export class AppModule { }
