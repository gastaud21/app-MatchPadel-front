import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuadraPadelComponent } from './quadra-padel.component';

describe('QuadraPadelComponent', () => {
  let component: QuadraPadelComponent;
  let fixture: ComponentFixture<QuadraPadelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuadraPadelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QuadraPadelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
