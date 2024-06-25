import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestrosComponent } from './investros.component';

describe('InvestrosComponent', () => {
  let component: InvestrosComponent;
  let fixture: ComponentFixture<InvestrosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InvestrosComponent]
    });
    fixture = TestBed.createComponent(InvestrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
