import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalIconComponent } from './local-icon.component';

describe('LocalIconComponent', () => {
  let component: LocalIconComponent;
  let fixture: ComponentFixture<LocalIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocalIconComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocalIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
