/* eslint-disable @nx/enforce-module-boundaries */
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { StackblitzComponent } from '../../stackblitz/stackblitz.component';
import { ProjectFiles } from '@stackblitz/sdk';

import * as basicTs from '../../../../../../libs/dialog/src/demo/basic.ts.txt';
import * as blankTs from '../../../../../../libs/dialog/src/demo/blank.ts.txt';
import * as backdropTs from '../../../../../../libs/dialog/src/demo/backdrop.ts.txt';
import * as escapeTs from '../../../../../../libs/dialog/src/demo/escape.ts.txt';
import * as tailwindTs from '../../../../../../libs/dialog/src/demo/tailwind.ts.txt';
import * as bootstrapTs from '../../../../../../libs/dialog/src/demo/bootstrap.ts.txt';

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

  bootstrapFiles: ProjectFiles = {
    'src/app/app.component.ts': bootstrapTs.default,
    'src/index.html': `<html><head><link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous"></head><body><app-root></app-root></body></html>`,
  };

  tailwindFiles: ProjectFiles = {
    'src/app/app.component.ts': tailwindTs.default,
    'src/index.html': `<html><head><script src="https://cdn.tailwindcss.com"></script></head><body><app-root></app-root></body></html>`,
  };
}
