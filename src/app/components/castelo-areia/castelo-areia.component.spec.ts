import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasteloAreiaComponent } from './castelo-areia.component';

describe('CasteloAreiaComponent', () => {
  let component: CasteloAreiaComponent;
  let fixture: ComponentFixture<CasteloAreiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CasteloAreiaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CasteloAreiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
