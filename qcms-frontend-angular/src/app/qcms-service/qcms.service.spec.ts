import { TestBed } from '@angular/core/testing';

import { QcmsService } from './qcms.service';

describe('QcmsServiceService', () => {
  let service: QcmsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QcmsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
