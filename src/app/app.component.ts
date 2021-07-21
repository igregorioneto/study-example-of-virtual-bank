import { ServicesService } from './services.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  isShow: boolean = true;

  constructor(public dialog: MatDialog, private credentials: ServicesService) {}
  ngOnInit(): void {
    this.isShow = this.credentials.getCredentials()
  }

  openDialog() {
    const dialogRef = this.dialog.open(AppComponent,{
      height: '350px'
    })

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`)
    })
  }
}
