import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddstudenComponent } from './addstuden.component';

describe('AddstudenComponent', () => {
  let component: AddstudenComponent;
  let fixture: ComponentFixture<AddstudenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddstudenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddstudenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
