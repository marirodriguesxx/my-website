import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiamondsBackgroundComponent } from './diamonds-background.component';

describe('DiamondsBackgroundComponent', () => {
  let component: DiamondsBackgroundComponent;
  let fixture: ComponentFixture<DiamondsBackgroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiamondsBackgroundComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiamondsBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
