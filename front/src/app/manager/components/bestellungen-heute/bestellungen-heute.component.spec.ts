import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestellungenHeuteComponent } from './bestellungen-heute.component';

describe('BestellungenHeuteComponent', () => {
  let component: BestellungenHeuteComponent;
  let fixture: ComponentFixture<BestellungenHeuteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BestellungenHeuteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BestellungenHeuteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
