import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfluencersListComponent } from './influencers-list.component';

describe('InfluencersListComponent', () => {
  let component: InfluencersListComponent;
  let fixture: ComponentFixture<InfluencersListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfluencersListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfluencersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
