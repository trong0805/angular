import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjecHomeComponent } from './subjec-home.component';

describe('SubjecHomeComponent', () => {
  let component: SubjecHomeComponent;
  let fixture: ComponentFixture<SubjecHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjecHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjecHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
