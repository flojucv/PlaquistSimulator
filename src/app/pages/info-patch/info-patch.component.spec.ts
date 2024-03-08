import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoPatchComponent } from './info-patch.component';

describe('InfoPatchComponent', () => {
  let component: InfoPatchComponent;
  let fixture: ComponentFixture<InfoPatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoPatchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InfoPatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
