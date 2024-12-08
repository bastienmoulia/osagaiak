import { NgClass } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  output,
  viewChild,
} from '@angular/core';

@Component({
  selector: 'osa-dialog',
  imports: [NgClass],
  templateUrl: './dialog.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OsaDialogComponent implements AfterViewInit {
  dialog = viewChild<{ nativeElement: HTMLDialogElement }>('dialog');
  dialogElement = computed(() => this.dialog()?.nativeElement);

  backdropClose = input<boolean>();
  preventEsc = input<boolean>();
  dialogClass = input<string>();
  // eslint-disable-next-line @angular-eslint/no-output-rename, @angular-eslint/no-output-on-prefix
  onClose = output<Event>({ alias: 'close' });

  ngAfterViewInit(): void {
    this.dialogElement()?.addEventListener('close', (e) => {
      this.onClose.emit(e);
    });
    this.dialogElement()?.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.preventEsc()) {
        e.preventDefault();
      }
    });
  }

  open(): void {
    this.dialogElement()?.showModal();
  }

  close(returnValue?: string): void {
    this.dialogElement()?.close(returnValue);
  }

  dialogClick(e: MouseEvent): void {
    if (this.backdropClose()) {
      const rect = this.dialogElement()?.getBoundingClientRect();
      if (rect) {
        const isInDialog =
          rect?.top <= e.clientY &&
          e.clientY <= rect?.top + rect?.height &&
          rect?.left <= e.clientX &&
          e.clientX <= rect?.left + rect?.width;
        if (!isInDialog) {
          this.dialogElement()?.close('backdrop');
        }
      }
    }
  }
}
