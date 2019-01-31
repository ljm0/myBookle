import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBookitemComponent } from './admin-bookitem.component';

describe('AdminBookitemComponent', () => {
  let component: AdminBookitemComponent;
  let fixture: ComponentFixture<AdminBookitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminBookitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminBookitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
