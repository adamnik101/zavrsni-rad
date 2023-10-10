import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackRowComponent } from './track-row.component';

describe('TrackRowComponent', () => {
  let component: TrackRowComponent;
  let fixture: ComponentFixture<TrackRowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrackRowComponent]
    });
    fixture = TestBed.createComponent(TrackRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
