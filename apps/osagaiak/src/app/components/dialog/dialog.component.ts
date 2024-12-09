/* eslint-disable @nx/enforce-module-boundaries */
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { StackblitzComponent } from '../../stackblitz/stackblitz.component';
import { ProjectFiles } from '@stackblitz/sdk';

import * as basicTs from '../../../../../../libs/dialog/src/demo/basic.ts.txt';
import * as blankTs from '../../../../../../libs/dialog/src/demo/blank.ts.txt';
import * as backdropTs from '../../../../../../libs/dialog/src/demo/backdrop.ts.txt';
import * as escapeTs from '../../../../../../libs/dialog/src/demo/escape.ts.txt';

@Component({
  selector: 'app-dialog',
  imports: [StackblitzComponent],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogComponent {
  basicFiles: ProjectFiles = {
    'src/app/app.component.ts': basicTs.default,
  };

  blankFiles: ProjectFiles = {
    'src/app/app.component.ts': blankTs.default,
  };

  backdropFiles: ProjectFiles = {
    'src/app/app.component.ts': backdropTs.default,
  };

  escapeFiles: ProjectFiles = {
    'src/app/app.component.ts': escapeTs.default,
  };
}
