import { NgTemplateOutlet } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  output,
  TemplateRef,
  viewChild,
} from '@angular/core';

@Component({
  selector: 'osa-dialog',
  imports: [NgTemplateOutlet],
  templateUrl: './dialog.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OsaDialogComponent implements AfterViewInit {
  dialog = viewChild<{ nativeElement: HTMLDialogElement }>('dialog');
  dialogElement = computed(() => this.dialog()?.nativeElement);

  dialogTitle = input<string>();
  backdropClose = input<boolean>();
  headerTemplate = input<TemplateRef<any>>();
  bodyTemplate = input<TemplateRef<any>>();
  footerTemplate = input<TemplateRef<any>>();
  // eslint-disable-next-line @angular-eslint/no-output-rename, @angular-eslint/no-output-on-prefix
  onClose = output<any>({ alias: 'close' });

  ngAfterViewInit(): void {
    this.dialogElement()?.addEventListener('close', (e) => {
      this.onClose.emit(e);
    });
  }

  open(): void {
    this.dialogElement()?.showModal();
  }

  close(returnValue: string): void {
    console.log('returnValue', returnValue);
    this.dialogElement()?.close(returnValue);
  }

  dialogClick(e: MouseEvent): void {
    console.log('dialogClick', e);
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
