import { TestBed } from '@angular/core/testing';

import { WebRequestService } from './web-request.service';

describe('WebRequestService', () => {
  let service: WebRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      teardown: {destroyAfterEach: false}   // <- add this line

    });
    service = TestBed.inject(WebRequestService);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
