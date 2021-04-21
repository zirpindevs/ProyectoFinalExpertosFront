import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagDialogDeleteComponent } from './tag-dialog-delete.component';

describe('TagDialogDeleteComponent', () => {
  let component: TagDialogDeleteComponent;
  let fixture: ComponentFixture<TagDialogDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TagDialogDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TagDialogDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
