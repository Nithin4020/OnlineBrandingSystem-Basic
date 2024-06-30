import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllBrandsComponent } from './get-all-brands.component';

describe('GetAllBrandsComponent', () => {
  let component: GetAllBrandsComponent;
  let fixture: ComponentFixture<GetAllBrandsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetAllBrandsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetAllBrandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
