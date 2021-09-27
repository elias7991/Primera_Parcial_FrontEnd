import { TestBed } from '@angular/core/testing';

import { ServiceHorarioAtencionService } from './service-horario-atencion.service';

describe('ServiceHorarioAtencionService', () => {
  let service: ServiceHorarioAtencionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceHorarioAtencionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
