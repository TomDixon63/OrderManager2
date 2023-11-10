import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LagerbestandComponent } from './lagerbestand.component';

describe('LagerbestandComponent', () => {
  let component: LagerbestandComponent;
  let fixture: ComponentFixture<LagerbestandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LagerbestandComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LagerbestandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
