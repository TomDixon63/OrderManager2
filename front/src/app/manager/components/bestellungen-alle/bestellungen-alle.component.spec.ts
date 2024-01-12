import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestellungenAlleComponent } from './bestellungen-alle.component';

describe('BestellungenAlleComponent', () => {
  let component: BestellungenAlleComponent;
  let fixture: ComponentFixture<BestellungenAlleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BestellungenAlleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BestellungenAlleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
