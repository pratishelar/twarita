/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MapReadyService } from './mapReady.service';

describe('Service: MapReady', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MapReadyService]
    });
  });

  it('should ...', inject([MapReadyService], (service: MapReadyService) => {
    expect(service).toBeTruthy();
  }));
});
