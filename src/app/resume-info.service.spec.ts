import { TestBed } from '@angular/core/testing';

import { ResumeInfoService } from './resume-info.service';

describe('ResumeInfoService', () => {
  let service: ResumeInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResumeInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
