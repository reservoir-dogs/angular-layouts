import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineDocumentationComponent } from './line-documentation.component';

describe('LineDocumentationComponent', () => {
  let component: LineDocumentationComponent;
  let fixture: ComponentFixture<LineDocumentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LineDocumentationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LineDocumentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
