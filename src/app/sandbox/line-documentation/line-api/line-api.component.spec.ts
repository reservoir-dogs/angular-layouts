import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineApiComponent } from './line-api.component';

describe('LineApiComponent', () => {
  let component: LineApiComponent;
  let fixture: ComponentFixture<LineApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LineApiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LineApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
