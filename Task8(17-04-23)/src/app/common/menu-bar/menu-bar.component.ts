import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { LastpageComponent } from 'src/app/pages/lastpage/lastpage.component';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(LastpageComponent);
  }
}
