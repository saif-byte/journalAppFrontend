import { Component } from '@angular/core';
import { JournalEntryModalComponent } from '../../modals/journal-entry-modal/journal-entry-modal.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-home',
  imports: [MatDialogModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(private dialog: MatDialog) {}

  openJournalModal() {
    const dialogRef = this.dialog.open(JournalEntryModalComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        console.log('Saved Entry:', result);
      }
    });
  }
}
