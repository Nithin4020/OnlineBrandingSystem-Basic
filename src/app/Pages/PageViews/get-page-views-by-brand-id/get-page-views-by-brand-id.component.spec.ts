import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetPageViewsByBrandIdComponent } from './get-page-views-by-brand-id.component';

describe('GetPageViewsByBrandIdComponent', () => {
  let component: GetPageViewsByBrandIdComponent;
  let fixture: ComponentFixture<GetPageViewsByBrandIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetPageViewsByBrandIdComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetPageViewsByBrandIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
