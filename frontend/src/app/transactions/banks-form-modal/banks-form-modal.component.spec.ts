import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BanksFormModalComponent } from './banks-form-modal.component';

describe('BanksFormModalComponent', () => {
  let component: BanksFormModalComponent;
  let fixture: ComponentFixture<BanksFormModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BanksFormModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BanksFormModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
