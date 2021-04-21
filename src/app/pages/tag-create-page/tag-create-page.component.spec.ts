import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagCreatePageComponent } from './tag-create-page.component';

describe('TagCreatePageComponent', () => {
  let component: TagCreatePageComponent;
  let fixture: ComponentFixture<TagCreatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TagCreatePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TagCreatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
