import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QcmsCreationComponent } from './qcms-creation.component';

describe('QcmsCreationComponent', () => {
  let component: QcmsCreationComponent;
  let fixture: ComponentFixture<QcmsCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QcmsCreationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QcmsCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
