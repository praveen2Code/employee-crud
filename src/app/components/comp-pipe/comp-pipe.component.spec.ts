import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompPipeComponent } from './comp-pipe.component';

describe('CompPipeComponent', () => {
  let component: CompPipeComponent;
  let fixture: ComponentFixture<CompPipeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompPipeComponent]
    });
    fixture = TestBed.createComponent(CompPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
