import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewQuizesUserComponent } from './view-quizes-user.component';

describe('ViewQuizesComponent', () => {
  let component: ViewQuizesUserComponent;
  let fixture: ComponentFixture<ViewQuizesUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewQuizesUserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewQuizesUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
