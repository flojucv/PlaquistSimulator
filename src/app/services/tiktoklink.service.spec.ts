import { TestBed } from '@angular/core/testing';

import { TiktoklinkService } from './tiktoklink.service';

describe('TiktoklinkService', () => {
  let service: TiktoklinkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TiktoklinkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
