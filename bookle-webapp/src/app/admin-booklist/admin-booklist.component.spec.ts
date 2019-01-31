import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBooklistComponent } from './admin-booklist.component';

describe('AdminBooklistComponent', () => {
  let component: AdminBooklistComponent;
  let fixture: ComponentFixture<AdminBooklistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminBooklistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminBooklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
