import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorlistComponent } from './authorlist.component';

describe('AuthorlistComponent', () => {
  let component: AuthorlistComponent;
  let fixture: ComponentFixture<AuthorlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
