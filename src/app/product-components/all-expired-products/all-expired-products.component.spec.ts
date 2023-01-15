import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllExpiredProductsComponent } from './all-expired-products.component';

describe('AllExpiredProductsComponent', () => {
  let component: AllExpiredProductsComponent;
  let fixture: ComponentFixture<AllExpiredProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllExpiredProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllExpiredProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
