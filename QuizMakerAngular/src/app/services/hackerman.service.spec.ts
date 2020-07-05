/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HackermanService } from './hackerman.service';

describe('Service: Hackerman', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HackermanService]
    });
  });

  it('should ...', inject([HackermanService], (service: HackermanService) => {
    expect(service).toBeTruthy();
  }));
});
