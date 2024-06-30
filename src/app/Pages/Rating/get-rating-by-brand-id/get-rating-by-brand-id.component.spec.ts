import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetRatingByBrandIdComponent } from './get-rating-by-brand-id.component';

describe('GetRatingByBrandIdComponent', () => {
  let component: GetRatingByBrandIdComponent;
  let fixture: ComponentFixture<GetRatingByBrandIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetRatingByBrandIdComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetRatingByBrandIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
