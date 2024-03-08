import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoActualityComponent } from './info-actuality.component';

describe('InfoActualityComponent', () => {
  let component: InfoActualityComponent;
  let fixture: ComponentFixture<InfoActualityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoActualityComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InfoActualityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
