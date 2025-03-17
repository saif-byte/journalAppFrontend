import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  NgForm,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatError, MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-journal-entry-modal',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule,
    MatFormField,
    MatLabel,
    MatError,
    MatInput,
  ],
  templateUrl: './journal-entry-modal.component.html',
  styleUrl: './journal-entry-modal.component.scss',
})
export class JournalEntryModalComponent {
  journalForm: any;
  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<JournalEntryModalComponent>, // ✅ Close Modal on Submission,
    private httpService: HttpService
  ) {
    this.journalForm = this.fb.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
    });
  }

  submitEntry() {
    if (this.journalForm.valid) {
      this.httpService.saveJournalEntry(this.journalForm.value).subscribe(
        () => {
          alert('Journal Entry Saved!');
          this.dialogRef.close(this.journalForm.value);
        },
        (error) => {
          alert('Journal Entry Failed to Save!');
        }
      );
    }
  }

  close() {
    this.dialogRef.close(); // ✅ Close modal without saving
  }
}
