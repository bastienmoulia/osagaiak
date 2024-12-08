import {
  ChangeDetectionStrategy,
  Component,
  effect,
  input,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import sdk from '@stackblitz/sdk';
import { angularProject } from './angular-project';

@Component({
  selector: 'app-stackblitz',
  imports: [CommonModule],
  templateUrl: './stackblitz.component.html',
  styleUrl: './stackblitz.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StackblitzComponent {
  folderName = input.required<string>();

  constructor() {
    effect(() => {
      this.folderName();
      sdk.embedProject('embed', angularProject, {
        height: 400,
        openFile: 'index.js',
        terminalHeight: 50,
      });
    });
  }
}
