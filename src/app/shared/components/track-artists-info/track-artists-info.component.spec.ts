import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackArtistsInfoComponent } from './track-artists-info.component';

describe('TrackArtistsInfoComponent', () => {
  let component: TrackArtistsInfoComponent;
  let fixture: ComponentFixture<TrackArtistsInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrackArtistsInfoComponent]
    });
    fixture = TestBed.createComponent(TrackArtistsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
