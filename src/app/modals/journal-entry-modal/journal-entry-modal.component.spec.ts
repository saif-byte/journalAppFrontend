import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JournalEntryModalComponent } from './journal-entry-modal.component';

describe('JournalEntryModalComponent', () => {
  let component: JournalEntryModalComponent;
  let fixture: ComponentFixture<JournalEntryModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JournalEntryModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JournalEntryModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
