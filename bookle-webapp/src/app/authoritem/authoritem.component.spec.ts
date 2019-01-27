import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthoritemComponent } from './authoritem.component';

describe('AuthoritemComponent', () => {
  let component: AuthoritemComponent;
  let fixture: ComponentFixture<AuthoritemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthoritemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthoritemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
