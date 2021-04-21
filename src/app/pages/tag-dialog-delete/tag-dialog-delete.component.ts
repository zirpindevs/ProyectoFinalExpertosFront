import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-tag-dialog-delete',
  templateUrl: './tag-dialog-delete.component.html',
  styleUrls: ['./tag-dialog-delete.component.scss']
})
export class TagDialogDeleteComponent implements OnInit {

  constructor(
    public dialogo: MatDialogRef<TagDialogDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public mensaje: string) { }

    cerrarDialogo(): void {
      this.dialogo.close(false);
    }
    confirmado(): void {
      this.dialogo.close(true);
    }

  ngOnInit() {
  }

}
