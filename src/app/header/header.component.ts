import { FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  formLogin = this.fb.group({ 
    cpf: ['']
  })

  ngOnInit(): void {
  }

}
