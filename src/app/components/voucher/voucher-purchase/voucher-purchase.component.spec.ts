import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoucherPurchaseComponent } from './voucher-purchase.component';

describe('VoucherPurchaseComponent', () => {
  let component: VoucherPurchaseComponent;
  let fixture: ComponentFixture<VoucherPurchaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoucherPurchaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VoucherPurchaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
