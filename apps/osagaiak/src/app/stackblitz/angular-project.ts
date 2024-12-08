import type { Project } from '@stackblitz/sdk';

const PACKAGE_JSON = `{
  "name": "angular",
  "version": "0.0.0",
  "private": true,
  "dependencies": {
    "@angular/animations": "^19.0.0",
    "@angular/common": "^19.0.0",
    "@angular/compiler": "^19.0.0",
    "@angular/core": "^19.0.0",
    "@angular/forms": "^19.0.0",
    "@angular/platform-browser": "^19.0.0",
    "@angular/platform-browser-dynamic": "^19.0.0",
    "@angular/router": "^19.0.0",
    "@osagaiak/dialog": "0.0.1",
    "rxjs": "~7.8.0",
    "tslib": "^2.3.0",
    "zone.js": "~0.15.0"
  },
  "scripts": {
    "ng": "ng",
    "start": "ng serve",
    "build": "ng build"
  },
  "devDependencies": {
    "@angular-devkit/build-angular": "^19.0.4",
    "@angular/cli": "^19.0.4",
    "@angular/compiler-cli": "^19.0.0",
    "typescript": "~5.6.2"
  }
}
`;

const ANGULAR_JSON = `{
  {
    "$schema": "./node_modules/@angular/cli/lib/config/schema.json",
    "version": 1,
    "newProjectRoot": "projects",
    "projects": {
      "demo": {
        "projectType": "application",
        "schematics": {
            "@schematics/angular:component": {
            "inlineTemplate": true,
            "inlineStyle": true,
            "skipTests": true
            },
            "@schematics/angular:class": {
            "skipTests": true
            },
            "@schematics/angular:directive": {
            "skipTests": true
            },
            "@schematics/angular:guard": {
            "skipTests": true
            },
            "@schematics/angular:interceptor": {
            "skipTests": true
            },
            "@schematics/angular:pipe": {
            "skipTests": true
            },
            "@schematics/angular:resolver": {
            "skipTests": true
            },
            "@schematics/angular:service": {
            "skipTests": true
            }
        },
        "root": "",
        "sourceRoot": "src",
        "prefix": "app",
        "architect": {
            "build": {
            "builder": "@angular-devkit/build-angular:application",
            "options": {
                "outputPath": "dist/demo",
                "index": "src/index.html",
                "browser": "src/main.ts",
                "polyfills": [],
                "tsConfig": "tsconfig.app.json",
                "assets": [
                {
                    "glob": "**/*",
                    "input": "public"
                }
                ],
                "styles": [
                "src/styles.css"
                ],
                "scripts": []
            },
            "configurations": {
                "production": {
                "budgets": [
                    {
                    "type": "initial",
                    "maximumWarning": "500kB",
                    "maximumError": "1MB"
                    },
                    {
                    "type": "anyComponentStyle",
                    "maximumWarning": "4kB",
                    "maximumError": "8kB"
                    }
                ],
                "outputHashing": "all"
                },
                "development": {
                "optimization": false,
                "extractLicenses": false,
                "sourceMap": true
                }
            },
            "defaultConfiguration": "production"
            },
            "serve": {
            "builder": "@angular-devkit/build-angular:dev-server",
            "configurations": {
                "production": {
                "buildTarget": "demo:build:production"
                },
                "development": {
                "buildTarget": "demo:build:development"
                }
            },
            "defaultConfiguration": "development"
            },
            "extract-i18n": {
            "builder": "@angular-devkit/build-angular:extract-i18n"
            }
        }
      }
    }
  }
}`;

const APP_CONFIG_TS = `
import { ApplicationConfig, provideExperimentalZonelessChangeDetection } from '@angular/core';

export const appConfig: ApplicationConfig = {
  providers: [provideExperimentalZonelessChangeDetection()]
};
`;

const APP_COMPONENT_TS = `
import { Component } from '@angular/core';
import { OsaDialogComponent } from '@osagaiak/dialog';

@Component({
  selector: 'app-root',
  imports: [OsaDialogComponent],
  templateUrl: './app.component.html',
  styles: [],
})
export class AppComponent {
  private _osaDialogDemo = viewChild.required<OsaDialogComponent>('osaDialogDemo');

  openDemo(): void {
    this._osaDialogDemo().open();
  }
}
`;

const APP_COMPONENT_HTML = `
<button type="button" (click)="openDemo()">Open dialog</button>
<osa-dialog #osaDialogDemo (close)="close($event)">
  <h1>This is a dialog</h1>
  <p>You can have a body</p>
  <button (click)="osaDialogDemo.close()">Close</button>
</osa-dialog>
`;

const MAIN_TS = `
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
`;

const TSCONFIG_JSON = `{
  {
  "compileOnSave": false,
  "compilerOptions": {
    "outDir": "./dist/out-tsc",
    "strict": true,
    "noImplicitOverride": true,
    "noPropertyAccessFromIndexSignature": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "skipLibCheck": true,
    "isolatedModules": true,
    "esModuleInterop": true,
    "experimentalDecorators": true,
    "moduleResolution": "bundler",
    "importHelpers": true,
    "target": "ES2022",
    "module": "ES2022"
  },
  "angularCompilerOptions": {
    "enableI18nLegacyMessageIdFormat": false,
    "strictInjectionParameters": true,
    "strictInputAccessModifiers": true,
    "strictTemplates": true
  }
}
}`;

const files = {
  'package.json': PACKAGE_JSON,
  'src/main.ts': MAIN_TS,
  'angular.json': ANGULAR_JSON,
  'tsconfig.json':
    '{\n  "compileOnSave": false,\n  "compilerOptions": {\n    "baseUrl": "./",\n    "outDir": "./dist/out-tsc",\n    "sourceMap": true,\n    "declaration": false,\n    "downlevelIteration": true,\n    "experimentalDecorators": true,\n    "module": "esnext",\n    "moduleResolution": "node",\n    "importHelpers": true,\n    "target": "es2015",\n    "typeRoots": [\n      "node_modules/@types"\n    ],\n    "lib": [\n      "es2018",\n      "dom"\n    ]\n  },\n  "angularCompilerOptions": {\n    "enableIvy": false,\n    "fullTemplateTypeCheck": true,\n    "strictInjectionParameters": true\n  }\n}',
  'src/index.html': '<app-root></app-root>',
  'src/styles.css': '/* Add application styles & imports to this file! */',
  'src/app/app.config.ts': APP_CONFIG_TS,
  'src/app/app.component.ts': APP_COMPONENT_TS,
  'src/app/app.component.html': APP_COMPONENT_HTML,
};

const dependencies = {
  '@angular/animations': '^19.0.0',
  '@angular/common': '^19.0.0',
  '@angular/compiler': '^19.0.0',
  '@angular/core': '^19.0.0',
  '@angular/forms': '^19.0.0',
  '@angular/platform-browser': '^19.0.0',
  '@angular/platform-browser-dynamic': '^19.0.0',
  '@angular/router': '^19.0.0',
  '@osagaiak/dialog': '0.0.1',
  'core-js': '^3.15.1',
  rxjs: '~7.8.0',
  tslib: '^2.3.0',
  'zone.js': '~0.15.0',
};

export const angularProject: Project = {
  title: 'Dynamically Generated Project',
  description: 'Simple example using the WebContainers "node" template.',
  template: 'angular-cli',
  files,
  dependencies, // uncomment to override EngineBlock dependencies
};
