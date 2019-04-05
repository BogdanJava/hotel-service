import {NgModule} from '@angular/core';
import {
  MatBadgeModule,
  MatButtonModule,
  MatCheckboxModule,
  MatIconModule,
  MatListModule,
  MatSidenavModule,
  MatTabsModule,
  MatToolbarModule
} from '@angular/material';

const matModules = [
  MatButtonModule,
  MatCheckboxModule,
  MatBadgeModule,
  MatToolbarModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatTabsModule
];

@NgModule({
  imports: matModules,
  exports: matModules
})
export class MaterialModule {
}

