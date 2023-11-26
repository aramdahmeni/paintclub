import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckparticipantsComponent } from './checkparticipants.component';

describe('CheckparticipantsComponent', () => {
  let component: CheckparticipantsComponent;
  let fixture: ComponentFixture<CheckparticipantsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CheckparticipantsComponent]
    });
    fixture = TestBed.createComponent(CheckparticipantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
