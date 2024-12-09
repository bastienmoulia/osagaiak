import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DialogComponent } from './dialog.component';

jest.mock('../../../../../../libs/dialog/src/demo/basic.ts.txt', () =>
  jest.fn(),
);
jest.mock('../../../../../../libs/dialog/src/demo/blank.ts.txt', () =>
  jest.fn(),
);
jest.mock('../../../../../../libs/dialog/src/demo/backdrop.ts.txt', () =>
  jest.fn(),
);
jest.mock('../../../../../../libs/dialog/src/demo/escape.ts.txt', () =>
  jest.fn(),
);

describe('DialogComponent', () => {
  let component: DialogComponent;
  let fixture: ComponentFixture<DialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
