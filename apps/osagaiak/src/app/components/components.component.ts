import { ChangeDetectionStrategy, Component, viewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OsaDialogComponent } from '@osagaiak/dialog';
import { StackblitzComponent } from '../stackblitz/stackblitz.component';

@Component({
  selector: 'app-components',
  imports: [CommonModule, OsaDialogComponent, StackblitzComponent],
  templateUrl: './components.component.html',
  styleUrl: './components.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComponentsComponent {
  private _osaDialogDemo =
    viewChild.required<OsaDialogComponent>('osaDialogDemo');
  private _osaDialogBlank =
    viewChild.required<OsaDialogComponent>('osaDialogBlank');
  private _osaDialogBackdrop =
    viewChild.required<OsaDialogComponent>('osaDialogBackdrop');
  private _osaDialogEscape =
    viewChild.required<OsaDialogComponent>('osaDialogEscape');

  openDemo(): void {
    this._osaDialogDemo().open();
  }

  openBlank(): void {
    this._osaDialogBlank().open();
  }

  openBackdrop(): void {
    this._osaDialogBackdrop().open();
  }

  openEscape(): void {
    this._osaDialogEscape().open();
  }

  close(e: any): void {
    console.log(e);
  }
}
