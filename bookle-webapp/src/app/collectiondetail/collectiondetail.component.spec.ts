import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectiondetailComponent } from './collectiondetail.component';

describe('CollectiondetailComponent', () => {
  let component: CollectiondetailComponent;
  let fixture: ComponentFixture<CollectiondetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectiondetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectiondetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
