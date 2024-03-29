import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EventBusService } from '../../service/broadcast/broadcast.service';

@Component({
  selector: 'app-manage-product-modal',
  templateUrl: './manage-product-modal.component.html',
  styleUrls: ['./manage-product-modal.component.scss']
})
export class ManageProductModalComponent {
  itemData: any; // Assuming itemData is defined

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<ManageProductModalComponent>,
    private eventBusService: EventBusService
  ) {
    this.itemData = data.itemData;
  }

  onSubmit(form: any): void {
    if (form.valid) {
      const eventData = this.itemData
    this.eventBusService.emitEvent(eventData);
      console.log('Form values:', this.itemData);
      // Here, you can perform further actions like sending the data to a service, etc.
      this.dialogRef.close(); // Close the modal after submitting the form
    } else {
      console.log('Form is invalid');
    }
  }

  cancel(): void {
    this.dialogRef.close(); // Cancel and close the modal
  }
}
