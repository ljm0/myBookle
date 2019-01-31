import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBookdetailComponent } from './admin-bookdetail.component';

describe('AdminBookdetailComponent', () => {
  let component: AdminBookdetailComponent;
  let fixture: ComponentFixture<AdminBookdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminBookdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminBookdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
