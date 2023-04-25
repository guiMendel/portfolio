import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioEntryComponent } from './portfolio-entry.component';

describe('PortfolioEntryComponent', () => {
  let component: PortfolioEntryComponent;
  let fixture: ComponentFixture<PortfolioEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioEntryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
