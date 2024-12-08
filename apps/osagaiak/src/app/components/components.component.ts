import { ChangeDetectionStrategy, Component, viewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OsaDialogComponent } from '@osagaiak/dialog';

@Component({
  selector: 'app-components',
  imports: [CommonModule, OsaDialogComponent],
  templateUrl: './components.component.html',
  styleUrl: './components.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComponentsComponent {
  private _osaDialog1 = viewChild.required<OsaDialogComponent>('osaDialog1');
  private _osaDialog2 = viewChild.required<OsaDialogComponent>('osaDialog2');

  open(): void {
    this._osaDialog1().open();
  }

  open2(): void {
    this._osaDialog2().open();
  }

  close(e: any): void {
    console.log(e);
  }
}
