import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestellungenUebermorgenComponent } from './bestellungen-uebermorgen.component';

describe('BestellungenUebermorgenComponent', () => {
  let component: BestellungenUebermorgenComponent;
  let fixture: ComponentFixture<BestellungenUebermorgenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BestellungenUebermorgenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BestellungenUebermorgenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
