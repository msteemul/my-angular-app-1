import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ManageProductModalComponent } from '../../modals/manage-product-modal/manage-product-modal.component';

@Injectable({
  providedIn: 'root'
})
export class ManageProductModalServiceService {

  constructor(private dialog: MatDialog) {}
  openDialog(): void {
    this.dialog.open(ManageProductModalComponent, {
      width: '400px', // Specify the width here
      // Other configuration options
    });
  }
}
