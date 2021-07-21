import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ModalNotCadastroComponent } from '../modal-not-cadastro/modal-not-cadastro.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  theEvent: any
  key: any
  regex: any
  keys: any
  getCadastro: any
  message: any

  constructor(private fb: FormBuilder, 
              private router: Router,
              private dialog: MatDialog) { }

  formLogin = this.fb.group({
    cpf:['']
  })

  ngOnInit(): void {
  }

  onlynumber(evt: any) {
    this.theEvent = evt || window.event
    this.key = this.theEvent.keyCode || this.theEvent.which

    this.regex = /^[0-9.]+$/
    if(!this.regex.test(this.key)) {
      this.theEvent.returnValue = false
      if(this.theEvent.preventDefault) {
        this.theEvent.preventDefault()
      }
    }
  }

  login() {
    this.getCadastro = localStorage.getItem('cadastro')
    const cpfPersistido = this.getCadastro['cpf']
    const cpfDigitado = this.formLogin.get('cpf')?.value
    if(cpfPersistido === cpfDigitado) {
      this.router.navigate(['/home-logada'])
    } else {
      this.openDialog()
    }
  }

  openDialog() {
    console.log('modal')
    let dialogRef = this.dialog.open(ModalNotCadastroComponent, {
      height: '350px'
    })

    // dialogRef.afterClose().subscribe(result => {
    //   console.log(`Dialog result: ${result}`)
    //  })
  }

}
