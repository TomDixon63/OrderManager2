import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestellungenMorgenComponent } from './bestellungen-morgen.component';

describe('BestellungenMorgenComponent', () => {
  let component: BestellungenMorgenComponent;
  let fixture: ComponentFixture<BestellungenMorgenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BestellungenMorgenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BestellungenMorgenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
