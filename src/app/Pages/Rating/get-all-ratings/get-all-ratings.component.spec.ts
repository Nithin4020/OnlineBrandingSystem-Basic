import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllRatingsComponent } from './get-all-ratings.component';

describe('GetAllRatingsComponent', () => {
  let component: GetAllRatingsComponent;
  let fixture: ComponentFixture<GetAllRatingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetAllRatingsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetAllRatingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
