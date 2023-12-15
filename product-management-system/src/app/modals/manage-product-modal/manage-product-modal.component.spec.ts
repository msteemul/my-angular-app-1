import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageProductModalComponent } from './manage-product-modal.component';

describe('ManageProductModalComponent', () => {
  let component: ManageProductModalComponent;
  let fixture: ComponentFixture<ManageProductModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManageProductModalComponent]
    });
    fixture = TestBed.createComponent(ManageProductModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
