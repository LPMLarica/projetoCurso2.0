import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Tecnico } from '../../../models/tecnico';
import { TecnicoService } from '../../../../../../HelpDesk/src/app/services/tecnico.service';

@Component({
  selector: 'app-tecnico-create',
  templateUrl: './tecnico-create.component.html',
  styleUrls: ['./tecnico-create.component.css']
})
export class TecnicoCreateComponent implements OnInit {

  tecnico: Tecnico = {
    id:         '',
    nome:       '',
    cpfcnpj:    '',
    email:      '',
    senha:      '',
    perfis:     [],
    dataCriacao: ''
  }

  senha: FormControl = new FormControl(null, Validators.minLength(3));

  constructor(
    private service: TecnicoService,
    private toast:    ToastrService,
    private router:          Router,
    ) { }

  ngOnInit(): void { [this.addPerfil(1)]}

  create(): void {
    //if (this.tecnico && this.tecnico.cpfcnpj && this.tecnico.nome && this.tecnico.email) {
      // this.tecnico= this.tecnicoDTO
    //}



    this.service.create(this.tecnico).subscribe(() => {
      this.toast.success('Técnico cadastrado com sucesso', 'Cadastro');
      this.router.navigate(['tecnicos'])
    }, ex => {
      if(ex.error.errors) {
        ex.error.errors.forEach(element => {
          this.toast.error(element.message);
        });
      } else {
        this.toast.error(ex.error.message);
      }
    })
  }

  addPerfil(perfil: any): void {
    if(this.tecnico.perfis.includes(perfil)) {
      this.tecnico.perfis.splice(this.tecnico.perfis.indexOf(perfil), 1);
    } else {
      this.tecnico.perfis.push(perfil);
    }
    
  }
  
  validaCampos(): boolean {
    return this.senha.valid
  }
}
