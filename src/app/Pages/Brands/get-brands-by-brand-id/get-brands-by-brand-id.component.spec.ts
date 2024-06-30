import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetBrandsByBrandIdComponent } from './get-brands-by-brand-id.component';

describe('GetBrandsByBrandIdComponent', () => {
  let component: GetBrandsByBrandIdComponent;
  let fixture: ComponentFixture<GetBrandsByBrandIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetBrandsByBrandIdComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetBrandsByBrandIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
