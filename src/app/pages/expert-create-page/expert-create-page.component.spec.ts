import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertCreatePageComponent } from './expert-create-page.component';

describe('ExpertCreatePageComponent', () => {
  let component: ExpertCreatePageComponent;
  let fixture: ComponentFixture<ExpertCreatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpertCreatePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpertCreatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
