import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  input,
  signal,
} from '@angular/core';
import sdk, { ProjectFiles } from '@stackblitz/sdk';
import { angularProject } from './angular-project';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stackblitz',
  imports: [CommonModule],
  template: `<div [id]="'embed-' + id()"></div>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StackblitzComponent implements AfterViewInit {
  files = input.required<ProjectFiles>();
  stackBlitzDescription = input<string>();
  stackblitzTitle = input<string>('Osagaiak');
  id = signal(crypto.randomUUID().split('-')[0]);

  ngAfterViewInit(): void {
    const project = angularProject;
    if (this.stackBlitzDescription()) {
      project.description = this.stackBlitzDescription();
    }
    project.title = this.stackblitzTitle();
    project.files = { ...project.files, ...this.files() };
    sdk.embedProject(`embed-${this.id()}`, project, {
      height: 400,
      //openFile: 'index.js',
      terminalHeight: 50,
    });
  }
}
