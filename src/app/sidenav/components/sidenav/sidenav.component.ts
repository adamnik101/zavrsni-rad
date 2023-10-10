import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {
  CreatePlaylistDialogComponent
} from "../../../playlists/components/create-playlist-dialog/create-playlist-dialog.component";

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {

  constructor(public dialog: MatDialog) {
  }
  openDialog() {
    const dialogRef = this.dialog.open(CreatePlaylistDialogComponent, {
      panelClass: 'custom-dialog',
      hasBackdrop: true,
      backdropClass: 'custom-backdrop'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
