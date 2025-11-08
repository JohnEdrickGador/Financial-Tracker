import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionsFormModalComponent } from './transactions-form-modal.component';

describe('TransactionsFormModalComponent', () => {
  let component: TransactionsFormModalComponent;
  let fixture: ComponentFixture<TransactionsFormModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransactionsFormModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransactionsFormModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
