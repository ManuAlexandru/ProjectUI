import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogBidComponent } from './dialog-bid.component';

describe('DialogBidComponent', () => {
  let component: DialogBidComponent;
  let fixture: ComponentFixture<DialogBidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogBidComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogBidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
