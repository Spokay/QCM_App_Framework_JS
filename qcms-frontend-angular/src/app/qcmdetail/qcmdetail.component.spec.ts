import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QcmdetailComponent } from './qcmdetail.component';

describe('QcmdetailComponent', () => {
  let component: QcmdetailComponent;
  let fixture: ComponentFixture<QcmdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QcmdetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QcmdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
