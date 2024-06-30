import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetRatingByUserIdComponent } from './get-rating-by-user-id.component';

describe('GetRatingByUserIdComponent', () => {
  let component: GetRatingByUserIdComponent;
  let fixture: ComponentFixture<GetRatingByUserIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetRatingByUserIdComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetRatingByUserIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
