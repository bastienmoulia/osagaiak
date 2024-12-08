import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lib-accordion',
  imports: [],
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccordionComponent {}
