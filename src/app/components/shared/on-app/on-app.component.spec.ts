import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnAppComponent } from './on-app.component';

describe('OnAppComponent', () => {
  let component: OnAppComponent;
  let fixture: ComponentFixture<OnAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnAppComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
