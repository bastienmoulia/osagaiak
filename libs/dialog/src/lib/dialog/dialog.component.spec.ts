import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OsaDialogComponent } from './dialog.component';
import { provideExperimentalZonelessChangeDetection } from '@angular/core';

describe('OsaDialogComponent', () => {
  let component: OsaDialogComponent;
  let fixture: ComponentFixture<OsaDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OsaDialogComponent],
      providers: [provideExperimentalZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(OsaDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', async () => {
    expect(component).toBeTruthy();
  });

  it('should not be visible', async () => {
    const dialogElement = fixture.nativeElement.querySelector(
      'dialog',
    ) as HTMLElement;
    expect(dialogElement).not.toBeVisible();
  });
});
