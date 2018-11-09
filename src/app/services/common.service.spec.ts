import {TestBed} from '@angular/core/testing';

import {CommonService} from './common.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';

describe('CommonService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
  });
  it('should be created', () => {
    const service: CommonService = TestBed.get(CommonService);
    expect(service).toBeTruthy();
  });
});
