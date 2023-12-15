import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';  // Import MatDialog
import { ManageProductModalComponent } from '../../modals/manage-product-modal/manage-product-modal.component'; // Replace with correct path
import { ManageProductModalServiceService } from '../../service/manage-product-modal-service/manage-product-modal-service.service'; 

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() itemData: any;

  constructor(
    private modalService: ManageProductModalServiceService,
    private dialog: MatDialog // Inject MatDialog
  ) {}

  openModal(): void {
    // Pass data to the modal while opening
    const dialogRef = this.dialog.open(ManageProductModalComponent, {
      width: '400px',
      data: { itemData: this.itemData } // Pass your data here
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The modal was closed');
      // Handle any result or action after the modal is closed
    });
  }
}
