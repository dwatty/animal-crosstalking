import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidentTileComponent } from './resident-tile.component';

describe('ResidentTileComponent', () => {
  let component: ResidentTileComponent;
  let fixture: ComponentFixture<ResidentTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResidentTileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResidentTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
