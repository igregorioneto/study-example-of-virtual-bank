import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cadastro-clientes',
  templateUrl: './cadastro-clientes.component.html',
  styleUrls: ['./cadastro-clientes.component.css']
})
export class CadastroClientesComponent implements OnInit {
  
  constructor(private fb: FormBuilder) { }
  
  formCadastro = this.fb.group({
    nome: [''],
    cpf: [''],
    email: [''],
    telefone: [''],
    endereco: ['']
  })


  ngOnInit(): void {

  }

  cadastro() {
    localStorage.setItem('cadastro', this.formCadastro.value)
  }

}
