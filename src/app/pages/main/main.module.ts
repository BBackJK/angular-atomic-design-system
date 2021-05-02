import { NgModule } from '@angular/core';

import { MainComponent } from './main.component';

import { AtomsModules } from '@shared/components/atoms/atoms.module';

@NgModule({
  imports: [ AtomsModules ],
  exports: [ MainComponent ],
  declarations: [ MainComponent ]
})
export class MainModule {}
