import { TestBed } from '@angular/core/testing';

import { ManageProductModalServiceService } from './manage-product-modal-service.service';

describe('ManageProductModalServiceService', () => {
  let service: ManageProductModalServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManageProductModalServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
